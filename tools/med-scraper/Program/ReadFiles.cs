using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Fizzler.Systems.HtmlAgilityPack;
using HtmlAgilityPack;
using Newtonsoft.Json;

namespace med_scraper.Program
{
    public class ReadFiles
    {
        public async Task<List<FinalItemRow>> ReadAllFiles()
        {
            var data = Directory.GetFiles(Path.Combine("..", "..", "..", "downloaded-jsons"))
                .Select(f => new
                {
                    Category = Path.GetFileNameWithoutExtension(f),
                    Contents = File.ReadAllText(f)
                })
                .Select(f =>
                    {
                        var obj = JsonConvert.DeserializeObject<TableItemRequest>(f.Contents);
                        foreach (var tableItem in obj.Data)
                        {
                            tableItem.Category = f.Category;
                        }

                        return obj;
                    }
                )
                .SelectMany(f => f.Data)
                .ToList();

            var files = Directory.GetFiles(Path.Combine("..", "..", "..", "downloaded-html"));

            var list = new List<FinalItemRow>();

            foreach (var file in files)
            {
                var html = await File.ReadAllTextAsync(file);

                var doc = new HtmlDocument();
                doc.LoadHtml(html);

                var document = doc.DocumentNode;

                var h1 = document.QuerySelector("h1.program-detail-name").InnerText;

                var programCode = document.QuerySelectorAll("label")
                    .SingleOrDefault(f => f.InnerText == "ACGME Program Code:")?.NextSibling.NextSibling.InnerText;
                var filled = document.QuerySelectorAll("th").FirstOrDefault(f => f.InnerText == "PGY1")?.NextSibling
                    .NextSibling.InnerText;

                var interviewed = document.QuerySelectorAll("th")
                    .FirstOrDefault(f => f.InnerText.Contains("Interviewed"))
                    ?.NextSibling.NextSibling.InnerText;

                var moneyRow = document.QuerySelectorAll("th").Where(f => f.InnerText == "PGY1").Skip(1)
                    .FirstOrDefault();

                var money = moneyRow.NextSibling.NextSibling.InnerText;
                var sickDays = moneyRow.NextSibling.NextSibling.NextSibling.NextSibling.InnerText;
                var vacationDays = moneyRow.NextSibling.NextSibling.NextSibling.NextSibling.NextSibling.NextSibling
                    .InnerText;

                var maxConsecutive = document
                    .QuerySelectorAll("th")
                    .SingleOrDefault(f =>
                        f.InnerText == "Maximum consecutive hours resident is allowed to work in Year 1")
                    ?.NextSibling.NextSibling.InnerText;

                var minimumStep1 = document
                    .QuerySelectorAll("th")
                    .SingleOrDefault(f => f.InnerText == "Minimum Step 1 Score for Interview Consideration")
                    ?.NextSibling.NextSibling.InnerText;

                var minimumStep2 = document
                    .QuerySelectorAll("th")
                    .SingleOrDefault(f => f.InnerText == "Minimum Step 2 Score for Interview Consideration")
                    ?.NextSibling.NextSibling.InnerText;

                var average = document
                    .QuerySelectorAll("th")
                    .SingleOrDefault(f => f.InnerText == "Average hours per week in Year 1 that residents work")
                    ?.NextSibling.NextSibling.InnerText;

                var completeData = new FinalItemRow()
                {
                    ProgramCode = WebUtility.HtmlDecode(programCode),
                    FilledResidentsPositionsByYear = WebUtility.HtmlDecode(filled),
                    Name = WebUtility.HtmlDecode(h1),
                    MaximumConsecutiveWorkHours = WebUtility.HtmlDecode(maxConsecutive.Replace(" hrs.", "")),
                    AverageHoursPerWeek = WebUtility.HtmlDecode(average.Replace(" hrs.", "")),
                    PaidSickDays = WebUtility.HtmlDecode(sickDays),
                    PaidVacationDays = WebUtility.HtmlDecode(vacationDays),
                    Salary = WebUtility.HtmlDecode(money.Replace("$", "").Replace(",", "")),
                    PercentOfApplicantsInterviewed = WebUtility.HtmlDecode(interviewed?.Trim()),
                    Link =
                        $"https://www.residencyexplorer.org/Program/GetById/{Path.GetFileNameWithoutExtension(file)}",
                    ProgramId = Convert.ToInt32(Path.GetFileNameWithoutExtension(file)),
                    MinimumStep1Score = WebUtility.HtmlDecode(minimumStep1),
                    MinimumStep2Score = WebUtility.HtmlDecode(minimumStep2)
                };

                list.Add(completeData);
            }

            var finalList = new List<FinalItemRow>();
            foreach (var place in data)
            {
                var baseData = list.SingleOrDefault(f => f.ProgramId == place.ProgramId);

                if (baseData == null)
                {
                    continue;
                }

                finalList.Add(new FinalItemRow()
                {
                    ProgramId = baseData.ProgramId,
                    Category = place.Category,
                    City = place.City,
                    Link = baseData.Link,
                    Name = baseData.Name,
                    Salary = baseData.Salary,
                    State = place.State,
                    ProgramCode = baseData.ProgramCode,
                    MinimumStep1Score = baseData.MinimumStep1Score,
                    MinimumStep2Score = baseData.MinimumStep2Score,
                    PaidSickDays = baseData.PaidSickDays,
                    PaidVacationDays = baseData.PaidVacationDays,
                    AverageHoursPerWeek = baseData.AverageHoursPerWeek,
                    MaximumConsecutiveWorkHours = baseData.MaximumConsecutiveWorkHours,
                    PercentOfApplicantsInterviewed = baseData.PercentOfApplicantsInterviewed,
                    FilledResidentsPositionsByYear = baseData.FilledResidentsPositionsByYear,
                    PercentApplicantsWhoMatchedFMG = place.PercentApplicantsWhoMatchedFMG,
                    PercentApplicantsWhoMatchedUSIMG = place.PercentApplicantsWhoMatchedUSIMG
                });
            }

            return finalList;
        }
    }
}
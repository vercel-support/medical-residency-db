using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Bogus;
using med_scraper.Program.Excel;
using Newtonsoft.Json;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using NPOI.XSSF.UserModel;
using Xunit;

namespace med_scraper.Program
{
    public class BogusUSer
    {
        public string name { get; set; }

        public string testimonialText { get; set; }

        public double rating { get; set; }

        public string almaMater { get; set; }

        public int graduatedYear { get; set; }

        public string location { get; set; }

        public string pictureUrl { get; set; }
    }


    public class GenerateExcelSheets
    {
        [Fact]
        public async Task Tppe()
        {
            var schools = File.ReadAllText("/users/vojtech.machacek/desktop/schools.json");
            var schoolNames = JsonConvert.DeserializeObject<List<BogusUSer>>(schools).Select(f => f.name);


            var d = new Faker<BogusUSer>()
                .RuleFor(f => f.name, (a, b) => a.Person.FullName)
                .RuleFor(f => f.location, (a, b) => $"{a.Address.City()}, {a.Address.State()}")
                .RuleFor(f => f.almaMater, (a, b) => a.PickRandom(schoolNames))
                .RuleFor(f => f.rating, (a, b) => a.Random.Double(3.5, 5))
                .RuleFor(f => f.graduatedYear, (a, b) => a.PickRandom(Enumerable.Range(2017, 5)))
                .RuleFor(f => f.testimonialText, (a, b) => a.Rant.Review())
                .RuleFor(f=>f.pictureUrl, (a,b)=> a.Image.LoremFlickrUrl());

            var reviews = d.Generate(14);

            var str = JsonConvert.SerializeObject(reviews);
        }


        [Fact]
        public async Task Generate()
        {
            var read = new ReadFiles();

            var data = await read.ReadAllFiles();

            var groups = data.GroupBy(f => f.Category).ToList();

            foreach (var group in groups)
            {
                var fs = new NpoiMemoryStream();

                IWorkbook workbook = new XSSFWorkbook();

                var styles = ExcelStyles.GetExcelStyles(workbook);

                var sheet = workbook.CreateSheet(group.Key);

                sheet.SetAutoFilter(new CellRangeAddress(0, 0, 0, 22));
                sheet.CreateFreezePane(0, 1);

                int colNum = 1;
                foreach (var g in group)
                {
                    var row = new RowCreator.RowCreatorV2(sheet.CreateRow(colNum));

                    row.Add("ProgramCode", g.ProgramCode, styles.TextStyle);
                    row.Add("Name", g.Name, styles.EurStyle);
                    row.Add("FilledResidentsPositionsByYear", g.FilledResidentsPositionsByYear);
                    row.Add("PercentOfApplicantsInterviewed", g.PercentOfApplicantsInterviewed);
                    row.Add("Salary", g.Salary);
                    row.Add("PaidSickDays", g.PaidSickDays);
                    row.Add("PaidVacationDays", g.PaidVacationDays);
                    row.Add("AverageHoursPerWeek", g.AverageHoursPerWeek);
                    row.Add("MaximumConsecutiveWorkHours", g.MaximumConsecutiveWorkHours);
                    row.Add("City", g.City);
                    row.Add("State", g.State);
                    row.Add("Category", g.Category);
                    row.Add("MinimumStep1Score", g.MinimumStep1Score);
                    row.Add("MinimumStep2Score", g.MinimumStep2Score);
                    row.Add("Link", g.Link);
                    row.Add("PercentApplicantsWhoMatchedUSIMG", g.PercentApplicantsWhoMatchedUSIMG?.ToString() ?? "-");
                    row.Add("PercentApplicantsWhoMatchedFMG", g.PercentApplicantsWhoMatchedFMG?.ToString() ?? "-");
                    colNum++;
                }

                //Enumerable.Range(1, 20).ToList().ForEach(f => sheet.AutoSizeColumn(f));

                workbook.Write(fs);

                var dir = Directory.GetCurrentDirectory();

                File.WriteAllBytes(Path.Combine(dir, "..", "..", "..", "excel-results", group.Key + ".xlsx"),
                    fs.ToArray());
            }
        }
    }
}
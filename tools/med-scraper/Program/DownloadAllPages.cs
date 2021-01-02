using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Xunit;
using Xunit.Abstractions;

namespace med_scraper.Program
{
    public class DownloadAllPages
    {
        private readonly ITestOutputHelper testOutputHelper;

        public DownloadAllPages(ITestOutputHelper testOutputHelper)
        {
            this.testOutputHelper = testOutputHelper;
        }

        private async Task<string> DownloadPage(HttpClient http, int id)
        {
            Console.WriteLine($"Downloading - {id}");
            var url = $"https://www.residencyexplorer.org/Program/GetById/{id}";
            return await http.GetStringAsync(url);
        }

        [Fact]
        public async Task DownloadAllPages1()
        {
            var http = new HttpClient();

            var headers = new Dictionary<string, string>()
            {
                {
                    "cookie",
                    "saml-session=0d815f95-ad21-4a01-a49d-19a76355cc07; .AspNetCore.Session=CfDJ8G4VGgL0VqBHpENYD2f7pkoqI21Ece97Ckmb5ziYkHqbprJjCFZs9awoGWoUbf2QodShJ8%2FcvLCUwsTDnmMg44g0gCyuZQ2xm5erRGlhvHRIBhoumdHBBMli7HRCW3lhCgfPQkCJX1cTDLmdiVbI3hAITHeIneUvdn3Xy8bb7U1D; .MyApp.Security.Cookie=CfDJ8G4VGgL0VqBHpENYD2f7pkoprSfH5uJaztrhiEWaINFz6QipRqRbnx424nf1B3OQbL8xt7kMSR7wZuddk636IbKg_WOpUegWroS3BeH6L-vJ9Ml8iEyXicUfUrnMiJJyXV7Afx8KVpj3RP_Cv4WjSYN_ETqdGNJMWAmElm4qoXPW1F3HgY4gSTV9XIh1S2vJIgjsgrHydnlx1MuMLgVKiNwshOji1hGpcQGiC9WQ7BjADK1rpibMjpLF13aQBwpojzKOQArRVYklmYxBD9ERxgkYUywmzzvcK9BKaUM7aQTLVk8gER406-D-Gg8qm9CvObkpP9z7Lw-1Tb9PEu8mpdbFoISqn7gj-0LHCqhpXro2MLbI6lCeOWdmF8aFOa5qGYV_yv0HVonzh9hbVafaF3MBUFpq9ouz34FWDQpKKw8nl_J6_f7qm9jBVatnjHfq5IjfU7poMXx5tyMciSEKWDHn9fy1GMlQqLtSzxqq1kCCc01y7DNmT12I6fswaaHa1dLfoi-eGoic6UFyYG7z9_scGOmP1aG61M1mpGs5Y9ksXnikY0Ir2Ofw71ka1p8nli8ovZot0qHTq6pWlJq6XgXMxW9aalBxAVGQcm0XnIRjZ2luMp9YDR7Q_6ccuut7ncVzZP7VwSVDF5jVYdgVBlf-ZI4I7_QCppI6u5odIV9ktbbNsiDz8pDSIjQU2Waa6Qt9AeOUkYVomzZxDNZEZtaVqYSTIii1-5HcEFOdZWb3zG_q9JAQQAL0hQkndsWmC4bLn6ueRaFNpl3TYfowkVLwyj-FAJ7Ad2IaNZKBtewxFGXvxu1RhQt6ReQK5Ci2Wh2JJLjjuA23YXBUHmCFC0fTPmaaQr35cjrKKEVU7xQw; .AspNetCore.Antiforgery.mEZFPqlrlZ8=CfDJ8G4VGgL0VqBHpENYD2f7pkozD5jd7Ic0ONLF5j0R4CC86Zyzk_waK6JaN4I_yO5jO9WyWIeOw3na9DzeCsv2KSugz5XgxY1EIcy2xzdtRf4FcrpF_DpJb7X13pGXQk1M0_Yty3dDEsyizd_LK_kC9AE; AWSALB=HeLhp8VQLzTVt4WRRXY/FtoLy5hx3e4fml8jp2nwEIuqonK3uZOkHrfeeRrmUjgyzOaxPjIb3vd7ktjxyucitrvvMagjdv8ZpkfRPqhOeGXw1JtmPA3TN930O0XA; AWSALBCORS=HeLhp8VQLzTVt4WRRXY/FtoLy5hx3e4fml8jp2nwEIuqonK3uZOkHrfeeRrmUjgyzOaxPjIb3vd7ktjxyucitrvvMagjdv8ZpkfRPqhOeGXw1JtmPA3TN930O0XA"
                },
            };

            foreach (var header in headers)
            {
                http.DefaultRequestHeaders.Add(header.Key, header.Value);
            }

            var programIds = new List<int>(Directory.GetFiles(Path.Combine("..", "..", "..", "downloaded-jsons"))
                .Where(f => { return f.Contains("EmergencyMedicine"); })
                .Select(File.ReadAllText)
                .Select(JsonConvert.DeserializeObject<TableItemRequest>)
                .SelectMany(f => f.Data)
                .Select(f => f.ProgramId)
                .Distinct()
                .OrderBy(f => f));

            var dir = Directory.GetCurrentDirectory();

            foreach (var id in programIds)
            {
                //!File.Exists(Path.Combine("..", "..", "..", "downloaded-html", $"{file}.html"))
                if (true)
                {
                    try
                    {
                        var content = await DownloadPage(http, id);

                        var path = Path.Combine(dir, "..", "..", "..", "downloaded-html");

                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }

                        await File.WriteAllTextAsync(Path.Combine(path, $"{id}.html"), content);
                        testOutputHelper.WriteLine($"file: {id} downloaded");
                    }
                    catch (Exception e)
                    {
                        testOutputHelper.WriteLine($"file: {id} failed to download - {e.Message}");
                    }
                }
                else
                {
                    testOutputHelper.WriteLine($"file: {id} skipped");
                }
            }
        }
    }
}
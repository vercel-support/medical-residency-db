using Newtonsoft.Json;

namespace med_scraper.Program
{
    public class FinalItemRow
    {
        public string ProgramCode { get; set; }
        public string Name { get; set; }
        public string FilledResidentsPositionsByYear { get; set; }
        public string PercentOfApplicantsInterviewed { get; set; }
        public string Salary { get; set; }
        public string PaidSickDays { get; set; }
        public string PaidVacationDays { get; set; }
        public string AverageHoursPerWeek { get; set; }
        public string MaximumConsecutiveWorkHours { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Category { get; set; }

        public string MinimumStep1Score { get; set; }

        public string MinimumStep2Score { get; set; }
        public string Link { get; set; }
        
        public int? PercentApplicantsWhoMatchedUSIMG { get; set; }
        
        public int? PercentApplicantsWhoMatchedFMG { get; set; }

        public int ProgramId { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }
    }
}
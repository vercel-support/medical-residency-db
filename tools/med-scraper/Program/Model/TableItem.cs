using System.Collections.Generic;

namespace med_scraper.Program
{
    public class TableItem
    {
        public int ProgramId { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Region { get; set; }
        public int? PercentApplicantsWhoMatchedUSMD { get; set; }
        public int? PercentApplicantsWhoMatchedUSDO { get; set; }
        public int? PercentApplicantsWhoMatchedUSIMG { get; set; } //this
        public int? PercentApplicantsWhoMatchedFMG { get; set; } //this
        public string Category { get; set; }
    }

    public class TableItemRequest
    {
        public List<TableItem> Data { get; set; }
        public int Total { get; set; }
        public object AggregateResults { get; set; }
        public object Errors { get; set; }
    }
}
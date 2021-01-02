using NPOI.SS.UserModel;

namespace med_scraper.Program
{
    public class ExcelStyles
    {
        private const string EurMoneyFormat = @"# ##0\ [$€-x-euro1]";
        private const string MonthDateFormat = "yyyy-mm;@";
        private const string DateFormat = "yyyy-mm-dd;@";
        private const string PercentageFormat = "0%";

        public ICellStyle MonthStyle { get; set; }
        public ICellStyle EurStyle { get; set; }
        public ICellStyle TextStyle { get; set; }
        public ICellStyle HeaderStyle { get; set; }
        public ICellStyle DateStyle { get; set; }
        public ICellStyle Percentage { get; set; }

        public static ExcelStyles GetExcelStyles(IWorkbook workbook)
        {
            ICellStyle eurStyle = workbook.CreateCellStyle();
            eurStyle.DataFormat = workbook.CreateDataFormat().GetFormat(EurMoneyFormat);
            ICellStyle monthStyle = workbook.CreateCellStyle();
            monthStyle.DataFormat = workbook.CreateDataFormat().GetFormat(MonthDateFormat);
            ICellStyle dateStyle = workbook.CreateCellStyle();
            dateStyle.DataFormat = workbook.CreateDataFormat().GetFormat(DateFormat);
            ICellStyle percentage = workbook.CreateCellStyle();
            percentage.DataFormat = workbook.CreateDataFormat().GetFormat(PercentageFormat);
            ICellStyle rightAlignment = workbook.CreateCellStyle();
            rightAlignment.Alignment = HorizontalAlignment.Right;
            rightAlignment.VerticalAlignment = VerticalAlignment.Top;

            ICellStyle textStyle = workbook.CreateCellStyle();
            textStyle.DataFormat = workbook.CreateDataFormat().GetFormat("text");
            
            var styles = new ExcelStyles()
            {
                DateStyle = dateStyle,
                EurStyle = eurStyle,
                HeaderStyle = rightAlignment,
                MonthStyle = monthStyle,
                Percentage = percentage,
                TextStyle = textStyle
            };
            return styles;
        }
    }
}
using System;
using NPOI.SS.UserModel;

namespace med_scraper.Program.Excel
{
    public static class ExceHelper
    {
        public static IRow Add(this IRow row, decimal value, int index, ICellStyle style = null)
        {
            var cell = row.CreateCell(index);
            cell.SetCellValue(Convert.ToDouble(value));

            if (style != null)
            {
                cell.CellStyle = style;
            }

            return row;
        }

        public static IRow Add(this IRow row, string value, int index, ICellStyle style = null)
        {
            var cell = row.CreateCell(index);
            cell.SetCellValue(value);

            if (style != null)
            {
                cell.CellStyle = style;
            }

            return row;
        }

        public static IRow Add(this IRow row, DateTime value, int index, ICellStyle style = null)
        {
            var cell = row.CreateCell(index);
            cell.SetCellValue(value);

            if (style != null)
            {
                cell.CellStyle = style;
            }

            return row;
        }
    }
}
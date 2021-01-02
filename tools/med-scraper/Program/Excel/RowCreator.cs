using System;
using NPOI.SS.UserModel;

namespace med_scraper.Program.Excel
{
    public class RowCreator
    {
        public class RowCreatorV2
        {
            private readonly IRow _row;
            private int _celIndex;
            public RowCreatorV2(IRow row)
            {
                _row = row;
            }

            private void AddHeader(string header)
            {
                if (_row.RowNum == 1)
                {
                    var headerRow = GetOrCreateHeader();
                    var cell = headerRow.CreateCell(_celIndex);
                    cell.SetCellValue(header);
                }
            }

            private IRow GetOrCreateHeader()
            {
                var headerRow = _row.Sheet.GetRow(0);

                if (headerRow == null)
                {
                    headerRow = _row.Sheet.CreateRow(0);
                }

                return headerRow;
            }

            public RowCreatorV2 Add(string header, decimal value, ICellStyle style = null)
            {
                AddHeader(header);
                _row.Add(value, _celIndex++, style);
                return this;
            }

            public RowCreatorV2 AddForumla(string header, string getFormulaContent, ICellStyle style = null)
            {
                AddHeader(header);
                var cell = _row.CreateCell(_celIndex++);
                cell.SetCellFormula(getFormulaContent);

                if (style != null)
                {
                    cell.CellStyle = style;
                }

                return this;

            }

            public RowCreatorV2 Add(string header, string value, ICellStyle style = null)
            {
                AddHeader(header);
                _row.Add(value, _celIndex++, style);
                return this;
            }

            public RowCreatorV2 Add(string header, DateTime value, ICellStyle style = null)
            {
                AddHeader(header);
                _row.Add(value, _celIndex++, style);
                return this;
            }
        }
    }
}
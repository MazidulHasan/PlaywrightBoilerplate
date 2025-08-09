import XLSX from 'xlsx';
import path from 'path';

export function readExcel(filePath = 'data/testData.xlsx', sheetName = null) {
  const fp = path.resolve(process.cwd(), filePath);
  const wb = XLSX.readFile(fp);
  const sheet = sheetName || wb.SheetNames[0];
  const data = XLSX.utils.sheet_to_json(wb.Sheets[sheet]);
  return data;
}
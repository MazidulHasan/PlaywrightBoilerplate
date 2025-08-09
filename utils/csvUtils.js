import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readCsv(filePath = 'data/testData.csv') {
  const fp = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fp);
  return parse(content, { columns: true, skip_empty_lines: true });
}
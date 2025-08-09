import fs from 'fs';
import path from 'path';

export function readJson(filePath = 'data/testData.json') {
  const fp = path.resolve(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(fp, 'utf-8'));
}

export function writeJson(filePath, obj) {
  const fp = path.resolve(process.cwd(), filePath);
  fs.writeFileSync(fp, JSON.stringify(obj, null, 2));
}
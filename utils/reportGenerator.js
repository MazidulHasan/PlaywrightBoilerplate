// utils/reportGenerator.js
// Very small helper to convert Playwright's JSON report output into a simplified custom report.
import fs from 'fs';
import path from 'path';

export function generateSimpleReport(playwrightJsonPath = 'playwright-report/results.json', outPath = 'reports/custom-report.json') {
  try {
    const data = JSON.parse(fs.readFileSync(path.resolve(playwrightJsonPath), 'utf-8'));
    const summary = {
      date: new Date().toISOString(),
      total: data.tests.length,
      passed: data.tests.filter(t => t.status === 'passed').length,
      failed: data.tests.filter(t => t.status === 'failed').length,
      tests: data.tests.map(t => ({ title: t.title, status: t.status, duration: t.duration }))
    };
    fs.writeFileSync(path.resolve(outPath), JSON.stringify(summary, null, 2));
  } catch (err) {
    // ignore if no report present
  }
}
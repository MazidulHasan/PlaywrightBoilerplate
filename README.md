# Playwright Boilerplate

## Setup

1. Clone the repo.
2. Install dependencies: `npm install`
3. Install browsers: `npx playwright install`
4. Run tests: `npm test`
5. See HTML report: `npm run report` or open `reports/html-report/index.html`

## Change environment

Set environment variable `TEST_ENV` to `local`, `qa`, or `prod`.

Example (Linux/macOS):

```bash
TEST_ENV=qa npm test
```

(Windows PowerShell):

```powershell
$env:TEST_ENV='qa'; npm test
```
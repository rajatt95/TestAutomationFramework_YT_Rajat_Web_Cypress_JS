# Test Automation Framework | WEB | Cypress + JS

This repository contains a Test Automation Framework built using Cypress and Javascript for Web applications.

## Video Tutorial

.............Link To be added.................
<!-- [![Watch the tutorial](https://img.youtube.com/vi/TqlQEa_a9AU/0.jpg)](https://www.youtube.com/watch?v=TqlQEa_a9AU) -->

<!-- Click on the image above to watch the tutorial. -->

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.16.1 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/rajatt95/TestAutomationFramework_YT_Rajat_Cypress_JS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TestAutomationFramework_YT_Rajat_Cypress_JS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

- Open Cypress Test Runner:

  ```bash
  npm run cy:open
  ```

- Run tests in ELECTRON browser (Headless mode):
  ```bash
  npm run cy:tests:ELECTRON:HEADLESS
  ```
- Run tests in CHROME browser:
  ```bash
  npm run cy:tests:CHROME
  ```
- Run tests in FIREFOX browser:
  ```bash
  npm run cy:tests:FIREFOX
  ```
- Run tests in EDGE browser:
  ```bash
  npm run cy:tests:EDGE
  ```

## Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- 01_ui_tests_chrome.yml
|          |-- 02_ui_tests_select_one.yml.yml
|          |-- 03_ui_tests_ALL.yml
|-- cypress
|     |-- e2e
|          |-- Sauce_Demo
|               |-- Login.cy.js
|     |-- fixtures
|          |-- login_credentials.json
|     |-- reports
|     |-- support
|          |-- pages
|               |-- components
|                   |-- Header.js
|                   |-- Footer.js
|               |-- BasePage.js
|               |-- LoginPage.js
|               |-- ProductsPage.js
|          |-- commands.js
|          |-- e2e.js
|-- .gitignore
|-- cypress.config.js
|-- package.json
```
- `cypress/e2e`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `cypress/fixtures`: Contains external fixtures (e.g., login credentials data) that can be used to mock data during tests.
- `cypress/support`: Contains custom commands and global configuration.
- `cypress/support/pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `cypress/plugins`: Contains plugins used by Cypress.
- `cypress/reports`: Contains the report for tests.





## Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.

## Continuous Integration

This project is configured for CI using Github Actions. Check the configuration in `.github/workflows/*.yml`
- `01_ui_tests_chrome.yml`
- `02_ui_tests_select_one.yml`
- `03_ui_tests_ALL.yml`

## Reporting

Mochawesome report (Screenshots and Videos are attached by default on test failure) is stored in the `cypress/reports` directory.


## Acknowledgments

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Automation Frameworks](https://github.com/stars/rajatt95/lists/cypress-automation-frameworks)
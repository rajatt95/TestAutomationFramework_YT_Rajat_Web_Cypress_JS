
---
# 💻 Test Automation Framework | WEB 

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)


[![Mochawesome Reports](https://img.shields.io/badge/Mochawesome%20Reports-<COLOR>?style=for-the-badge&logo=mochawesome&logoColor=white)](https://www.npmjs.com/package/cypress-mochawesome-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents

- [Introduction](#introduction)
- [Video Tutorial](#video-tutorial)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)
- [Other Projects](#other-projects)
- [Technical Documents](#technical-documents)
- [Contacts](#contacts)

## 📖 Introduction
This repository contains a Test Automation Framework built using Cypress and Javascript for automated testing of web applications.

## 🎥 Video Tutorial

<a href="https://www.youtube.com/watch?v=xVlSLhB3VcA"> <img src="https://img.youtube.com/vi/xVlSLhB3VcA/0.jpg" alt="Tutorial | POM | Selenium WebDriver + Java" width="200"> </a>

Click on the image above to watch the tutorial.

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

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

## 🚀 Running Tests

- Open Cypress Test Runner:

  ```bash
  npm run cy:open
  ```
- Run tests in different browsers:

  - [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
  ```bash
  npm run cy:tests:CHROME
  ```
  ```bash
  npm run cy:tests:FIREFOX
  ```
  ```bash
  npm run cy:tests:EDGE
  ```
  ```bash
  npm run cy:tests:ELECTRON
  ```

- Run tests in different modes (Headless):
  ```bash
  npm run cy:tests:ELECTRON:HEADLESS
  ```

## 📁 Project Structure

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

## ⚙️ Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.

## 🔄 Continuous Integration


This project is configured for CI using Github Actions. Check the configuration in `.github/workflows/*.yml`
- `01_ui_tests_chrome.yml`
- `02_ui_tests_select_one.yml`
- `03_ui_tests_ALL.yml`

## 📊 Reporting

Mochawesome report (Screenshots and Videos are attached by default on test failure) is stored in the `cypress/reports` directory.

## 🔭 Other Projects

- [![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://github.com/stars/rajatt95/lists/programming-language-java)  - 
  [![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://github.com/stars/rajatt95/lists/selenium-automation-frameworks)
  [![Appium](https://img.shields.io/badge/Appium-40C4FF?style=for-the-badge&logo=appium&logoColor=white)](https://github.com/stars/rajatt95/lists/appium-automation-frameworks)
  [![Rest Assured](https://img.shields.io/badge/Rest%20Assured-5B47A5?style=for-the-badge&logo=rest-assured&logoColor=white)](https://github.com/stars/rajatt95/lists/restassured-automation-framework)

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/stars/rajatt95/lists/programming-language-javascript) - 
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://github.com/stars/rajatt95/lists/cypress-automation-frameworks)
[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://github.com/stars/rajatt95/lists/playwright-automation-frameworks)

- [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://github.com/stars/rajatt95/lists/programming-language-python) -
  [![Requests](https://img.shields.io/badge/Requests-2CA5E0?style=for-the-badge&logo=python&logoColor=white)](https://github.com/stars/rajatt95/lists/requests-automation-framework)

## 📄 Technical Documents

- [![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=google-drive&logoColor=white)](https://drive.google.com/drive/folders/1tne9pZjgWvfrS0l9tVHs6k1jnQHpTLoA?usp=sharing)
- [![GitHub Repository](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajatt95/Documents)

## 📧 Contacts

- [![Email](https://img.shields.io/badge/Email-rajatvermaa95%40gmail.com-green)](mailto:rajatvermaa95@gmail.com)
- [![GitHub Profile](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/rajatt95)
- [![GitHub Page](https://img.shields.io/badge/GitHub-Page-lightgrey)](https://rajatt95.github.io/)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/rajatt95)
- [![Topmate](https://img.shields.io/badge/Topmate-Profile-red)](https://topmate.io/rajatt95)
- [![Telegram](https://img.shields.io/badge/Telegram-Channel-blue)](https://t.me/rajatt95)
- [![Instagram](https://img.shields.io/badge/Instagram-Profile-orange)](https://www.instagram.com/rajattvermaa95/)
- [![YouTube](https://img.shields.io/badge/YouTube-Channel-red)](https://www.youtube.com/@rajatt95)
- [![WhatsApp Community](https://img.shields.io/badge/WhatsApp-Community-brightgreen)](https://chat.whatsapp.com/LP20xMGvxnEL88GoB58bo1)
- [![WhatsApp Channel](https://img.shields.io/badge/WhatsApp-Channel-brightgreen)](https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r)

Feel free to reach out if you have any questions, or suggestions, or just want to chat!

Thanks for visiting my GitHub profile! 😊

<p align="left"> <img src="https://komarev.com/ghpvc/?username=rajatt95&label=Profile%20views&color=0e75b6&style=flat" alt="rajatt95" /> </p>

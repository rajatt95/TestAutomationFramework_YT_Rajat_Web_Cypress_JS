/**
#  * Author: Rajat Verma
#  * Email: rajatvermaa95@gmail.com
#  * GitHub Profile: https://github.com/rajatt95
#  * GitHub Page: https://rajatt95.github.io/
#  * LinkedIn: https://www.linkedin.com/in/rajatt95/
#  * Topmate: https://topmate.io/rajatt95
#  * Telegram: https://t.me/rajatt95
#  * Instagram: https://www.instagram.com/rajattvermaa95/
#  * YouTube: https://www.youtube.com/@rajatt95
#  * WhatsApp: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
#  */

/***************************************************/

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    application_URL: 'https://www.saucedemo.com/'
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/sauce-demo-ui-tests-report',
    charts: true,
    reportPageTitle: 'Sauce Demo UI Tests',
    embeddedScreenshots: true,
    inlineAssets: true,    
    overwrite: false,
    autoOpen: false,
    code: true,
    timestamp: 'longDate',
    showPassed: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

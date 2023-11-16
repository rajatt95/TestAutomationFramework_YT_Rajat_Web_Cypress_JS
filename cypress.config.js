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
#  * WhatsApp Community: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
#  * WhatsApp Channel: https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r
#  */

/***************************************************/

// Import the `defineConfig` function from Cypress
const { defineConfig } = require("cypress");

// Export the Cypress configuration using the defineConfig function
module.exports = defineConfig({

  // Set environment variables, in this case, the URL of the application under test
  env: {
    application_URL: 'https://www.saucedemo.com/'
  },

  // Set the default viewport dimensions
  viewportHeight: 760,
  viewportWidth: 1100,

  // Set the number of retries for failed tests
  retries: 1, 

  // Enable video recording of test runs and compress the video
  video: true,
  videoCompression: true,
  
  // Configure the Mochawesome reporter for generating test reports
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

  // Setup Node events for Cypress (in this case, use the mochawesome reporter plugin)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

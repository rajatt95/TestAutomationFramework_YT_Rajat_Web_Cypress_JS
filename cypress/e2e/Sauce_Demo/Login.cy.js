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


/***************************************************/

/// <reference types="cypress" />

// Importing page objects and components
import loginPage from '../../support/pages/LoginPage'
import productsPage from '../../support/pages/ProductsPage'
import header from '../../support/pages/components/Header'
import footer from '../../support/pages/components/Footer'

// Retrieve the application URL from Cypress environment variables
const application_URL = Cypress.env('application_URL')

// Test Suite for Sauce Demo Login
describe('Sauce Demo ('+application_URL+') - [LOGIN]', () => {
  
  // Load login credentials from fixtures
  const login_credentials = require('/cypress/fixtures/login_credentials.json')
  const valid_username_1 = login_credentials.valid_username_1
  const valid_password_1 = login_credentials.valid_password_1
 

  /**
   * Set up tasks to be performed before each test
   */
  beforeEach(() => {
    // Navigate to the Sauce Demo website before each test
    // cy.visit('https://www.saucedemo.com/')

    // Navigate to the Sauce Demo website before each test using a custom Cypress command
    // cy.goToApplication()

  })

  /**
   * Test Case: Login with valid credentials
   * @regression [LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials.
   */
  it('@regression [LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials.', () => {
    
    // Navigate to the Sauce Demo website using a custom Cypress command
    cy.goToApplication()

    // Perform login using the loginPage object
    loginPage.loginToApplication(valid_username_1, valid_password_1)

    // Assertions for an successful login 

    // Verify successful login on the Products Page
    productsPage.elements.heading_products().should('have.text', 'Products')

    // Verify common components on the page
    header.elements.logo_application().should('have.text', 'Swag Labs')
    footer.elements.msg_copyright().should('include.text', ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    
  })

  /**
   * Test Case: Validate Google Page Title
   * @regression @sanity [Google] Page Title. Validate that User is able to see the required Page title.
   */
  it('@regression @sanity [Google] Page Title. Validate that User is able to see the required Page title.', () => {
      
    // Navigate to the Google website 
    cy.visit("https://www.google.com/")

    // Get and validate the page title
    cy.title().should('eq', 'Google');
          
  });

  /**
   * Test Case (Before Optimization): Login with valid credentials
   * @regression [LOGIN] Login with valid credentials (Before Optimization). Validate that User is able to login using valid credentials.
   */
  it.skip('Before Optimization (POM, Test Data) >> [LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials.', () => {
    
    // Type valid credentials and login
    // cy.get('#user-name').type('standard_user')
    // cy.xpath("//input[@id='user-name']").type('standard_user')

    // cy.xpath("//input[@id='user-name']").type('standard_user')
    // cy.get('#password').type('secret_sauce')
    
    // cy.xpath("//input[@id='user-name']").type(valid_username_1)
    // cy.get('#password').type(valid_password_1)
    // cy.get('#login-button').click()

    // Perform login using raw Cypress commands (before optimization)
    loginPage.loginToApplication(valid_username_1, valid_password_1)

    // Assertions for an successful login 

    // Verify successful login on the Products Page
    // cy.get('.title').should('have.text', 'Products')
    productsPage.elements.heading_products().should('have.text', 'Products')

    // Verify common components on the page
    // cy.get('.app_logo').should('have.text', 'Swag Labs')
    // cy.get('.footer_copy').should('include.text', ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    header.elements.logo_application().should('have.text', 'Swag Labs')
    footer.elements.msg_copyright().should('include.text', ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    
  })
  
})

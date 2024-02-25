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
import components from '../../support/pages/Components'

// Importing utilities
import verificationUtils from '../../support/utils/VerificationUtils'
import waitUtils from '../../support/utils/WaitUtils'

// Retrieve the application URL from Cypress environment variables
const application_URL = Cypress.env('application_URL')

// Test Suite for Sauce Demo Login
describe('Sauce Demo ('+application_URL+') - [LOGIN]', () => {
  
  // Loading login credentials from JSON file
  const loginCredentials = require('../../fixtures/login_credentials.json')
  
  // Extracting credentials for both valid and invalid cases
  const {
    credentials_1: { valid_username, valid_password },
    credentials_2: { invalid_username, invalid_password }
  } = loginCredentials.data;


  /**
   * Before each test, navigate to the application homepage.
   */
  beforeEach(() => {
    // Navigate to the Sauce Demo website before each test using a custom Cypress command
    cy.goToApplication()

  })

  /**
   * Test Case: Login with valid credentials
   * [LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials. @regression @sanity
   */
  it('[LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials. @regression @sanity', () => {
    
    // Perform login using the loginPage object
    loginPage.loginToApplication(valid_username, valid_password)

    // Assertions for an successful login 

    // Verify successful login on the Products Page
    verificationUtils.elementHasText(productsPage.elements.heading_products(), 'Products')

    // Verify common components on the page

    // Verify the logo in the header is present
    verificationUtils.elementIsVisible(components.elements.header_logo_swag_labs(), "Header: Application Logo")

    // Verify the logo text in the header
    verificationUtils.elementHasText(components.elements.header_logo_swag_labs(), 'Swag Labs')

    // Verify the copyright message in the footer
    verificationUtils.elementContainsText(components.elements.footer_msg_copyright(), ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    // Verify the href attribute and value for the LinkedIn link in the footer
    verificationUtils.elementHasAttributeAndHasValue(components.elements.footer_link_linkedIn(), "Footer: LinkedIn link", 'href', 'https://www.linkedin.com/company/sauce-labs/')    
    
    cy.screenshot()

  })


  /**
   * Test Case: Login with invalid credentials
   * [LOGIN] Test case: Login with invalid credentials. Validate that User is unable to login using invalid credentials. @regression
   */
  it('[LOGIN] Login with invalid credentials. Validate that User is unable to login using invalid credentials. @regression', () => {
    
    // Fill invalid credentials and Login 
    loginPage.loginToApplication(invalid_username, invalid_password)

    // Verify the error message for Username and Password not match with any User
    verificationUtils.elementContainsText(loginPage.elements.message_error_not_match(), 'Username and password do not match')

    // Added to check utilities implementation
    verificationUtils.pageHasTitle('Swag Labs')
    verificationUtils.pageContainsTitle('Swag')
    verificationUtils.pageHasUrl('https://www.saucedemo.com/')
    verificationUtils.pageContainsUrl('demo')

    waitUtils.waitForGivenTime(5)

  })

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

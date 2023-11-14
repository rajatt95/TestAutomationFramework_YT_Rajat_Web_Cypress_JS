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

/// <reference types="cypress" />

import loginPage from '../../support/pages/LoginPage'

const application_URL = Cypress.env('application_URL')

describe('Sauce Demo ('+application_URL+') - [LOGIN]', () => {
  
  const login_credentials = require('/cypress/fixtures/login_credentials.json')
  const valid_username_1 = login_credentials.valid_username_1
  const valid_password_1 = login_credentials.valid_password_1
 

  beforeEach(() => {
    // Navigate to the Sauce Demo website before each test
    // cy.visit('https://www.saucedemo.com/')

    // Navigate to the Sauce Demo website before each test using Cypress custom command
    cy.goToApplication()

  })

  it('[LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials.', () => {
    
    // Type valid credentials and login
    // cy.get('#user-name').type('standard_user')
    // cy.xpath("//input[@id='user-name']").type('standard_user')

    // cy.xpath("//input[@id='user-name']").type('standard_user')
    // cy.get('#password').type('secret_sauce')
    
    // cy.xpath("//input[@id='user-name']").type(valid_username_1)
    // cy.get('#password').type(valid_password_1)
    // cy.get('#login-button').click()

    loginPage.loginToApplication(valid_username_1, valid_password_1)

    // Assertions for an successful login 

    // Verify successful login on the Products Page
    cy.get('.title').should('have.text', 'Products')

    // Verify common components on the page
    cy.get('.app_logo').should('have.text', 'Swag Labs')
    cy.get('.footer_copy').should('include.text', ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    
  })
  
})

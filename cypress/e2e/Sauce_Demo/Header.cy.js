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
import cartPage from '../../support/pages/CartPage'
import header from '../../support/pages/components/Header'

// Importing utilities
import verificationUtils from '../../support/utils/VerificationUtils'

/**
 * Test suite for Sauce Demo Header Component.
 */
describe('Sauce Demo - [Header]', () => {

  /**
   * Before each test, navigate to the application homepage and login.
   */
  beforeEach(() => {
    // Navigate to the Sauce Demo website before each test using a custom Cypress command
    cy.goToApplication()
    loginPage.loginToApplicationWithValidCredentials()
  })

  /**
   * Test case: [Header] Static Messages. Validate that User is able to see messages in Header component.
   * @tags {regression, sanity}
   */
  it('[Header] Static Messages. Validate that User is able to see messages in Header component. @regression @sanity', () => {
   
    // Verify the side-panel expand icon on the header
    verificationUtils.elementIsVisible(header.elements.icon_expand(), "Side-Panel: Expand Icon")

    // Verify the logo on the header
    verificationUtils.elementHasText(header.elements.logo_application(), 'Swag Labs')
    
    // Verify the cart icon on the header
    verificationUtils.elementIsVisible(header.elements.icon_cart(), "Header: Cart icon")
      
  });  


  /**
   * Test case: [Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon.
   * @tags {regression}
   */
  it.only('[Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon. @regression', () => {
   
    // Click on Cart icon
    header.click_header_icon_cart()

    // Verify that User is on Cart Page
    verificationUtils.elementHasText(cartPage.elements.heading_your_cart(), 'Your Cart')
  
    // Verify the Page URL
    verificationUtils.pageContainsUrl('cart')
    // verificationUtils.pageHasUrl('cart.html') // baseUrl value will be fetched from playwright.config.js file

    // Verify the Page Title
    verificationUtils.pageContainsTitle('Labs')
    verificationUtils.pageHasTitle('Swag Labs')    

  });  

    
})

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

// Importing page objects
import loginPage from '../../support/pages/LoginPage'
import cartPage from '../../support/pages/CartPage'
import components from '../../support/pages/components/Components'

// Importing utilities
import verificationUtils from '../../support/utils/VerificationUtils'

/**
 * Test suite for Sauce Demo Application Components.
 */
describe('Sauce Demo - [Components]', () => {

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
    verificationUtils.elementIsVisible(components.elements.side_panel_icon_expand(), "Side-Panel: Expand Icon")

    // Verify the logo on the header
    verificationUtils.elementHasText(components.elements.header_logo_swag_labs(), 'Swag Labs')
    
    // Verify the cart icon on the header
    verificationUtils.elementIsVisible(components.elements.header_icon_cart(), "Header: Cart icon")
      
  });  


  /**
   * Test case: [Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon.
   * @tags {regression}
   */
  it('[Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon. @regression', () => {
   
    // Click on Cart icon
    components.click_header_icon_cart()

    // Verify that User is on Cart Page
    verificationUtils.elementHasText(cartPage.elements.heading_your_cart(), 'Your Cart')
  
    // Verify the Page URL
    verificationUtils.pageContainsUrl('cart')
    // verificationUtils.pageHasUrl('cart.html') // baseUrl value will be fetched from cypress.config.js file

    // Verify the Page Title
    verificationUtils.pageContainsTitle('Labs')
    verificationUtils.pageHasTitle('Swag Labs')    

  });  

  /**
   * Test case: [Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity
   * @tags {regression, sanity}
   */
  it('[Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity', () => {
    
    // Verify the social links icon
    verificationUtils.elementIsVisible(components.elements.footer_link_twitter(), "Footer: Twitter link")
    verificationUtils.elementIsVisible(components.elements.footer_link_facebook(), "Footer: Facebook link")
    verificationUtils.elementIsVisible(components.elements.footer_link_linkedIn(), "Footer: LinkedIn link")

    // Verify the copyright message 
    verificationUtils.elementContainsText(components.elements.footer_msg_copyright(), '© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

  });  

  /**
   * Test case: [Footer] Links navigation. Validate that User is able to navigate to social platforms using icons.
   * @tags {regression}
   */
  it('[Footer] Links navigation. Validate that User is able to navigate to social platforms using icons. @regression', () => {

    // Verify the social links  
    verificationUtils.elementHasAttributeAndHasValue(components.elements.footer_link_twitter(), "Footer: Twitter link", "href","https://twitter.com/saucelabs")
    verificationUtils.elementHasAttributeAndHasValue(components.elements.footer_link_facebook(), "Footer: Facebook link", "href","https://www.facebook.com/saucelabs")
    verificationUtils.elementHasAttributeAndHasValue(components.elements.footer_link_linkedIn(), "Footer: LinkedIn link", "href","https://www.linkedin.com/company/sauce-labs/")

  });  


    
})

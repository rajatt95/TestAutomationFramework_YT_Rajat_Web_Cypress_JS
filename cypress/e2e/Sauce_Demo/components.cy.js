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
import components from '../../support/pages/Components'

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
  it.only('[Header] Static Messages. Validate that User is able to see messages in Header component. @regression @sanity', () => {
   
    // Verify the side-panel expand icon on the header
    verificationUtils.elementIsVisible(components.elements.side_panel_icon_expand(), "Side-Panel: Expand Icon")

    // Verify the logo on the header
    verificationUtils.elementHasText(components.elements.header_logo_swag_labs(), 'Swag Labs')
    
    // Verify the cart icon on the header
    verificationUtils.elementIsVisible(components.elements.header_icon_cart(), "Header: Cart icon")

    // Verify the CSS Property of the logo
    verificationUtils.elementHasCSSPropertyAndHasValue(components.elements.header_logo_swag_labs(), "Header: Swag Labs", "font-size","24px")
    verificationUtils.elementHasCSSPropertyAndHasValue(components.elements.header_logo_swag_labs(), "Header: Swag Labs", "font-family",'"DM Mono", "sans-serif"')
    verificationUtils.elementHasCSSPropertyAndHasValue(components.elements.header_logo_swag_labs(), "Header: Swag Labs", "color","rgb(19, 35, 34)")
    

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

  /**
   * Test case: [Side-Panel] Static Messages. Validate that User is able to see messages in Side-Panel component.
   * @tags {regression, sanity}
   */
  it('[Side-Panel] Static Messages. Validate that User is able to see messages in Side-Panel component. @regression @sanity', () => {

    // Open Side-Panel
    components.click_side_panel_icon_expand()

    // Verify Links in Side-Panel
    verificationUtils.elementHasText(components.elements.side_panel_link_allItems(), "All Items")
    verificationUtils.elementHasText(components.elements.side_panel_link_about(), "About")
    verificationUtils.elementHasText(components.elements.side_panel_link_logout(), "Logout")
    verificationUtils.elementHasText(components.elements.side_panel_link_resetAppState(), "Reset App State")
      
    verificationUtils.elementsCount(components.elements.side_panel_links(), "Side-Panel links", 4)
    
    verificationUtils.elementIsVisible(components.elements.side_panel_icon_cross(), "Side-Panel: Cross link")
    
  });  


  /**
   * Test case: [Side-Panel] Panel Expand/Collapse. Validate that User is able to expand/collapse panel using icons.
   * @tags {regression}
   */
  it('[Side-Panel] Panel Expand/Collapse. Validate that User is able to expand/collapse panel using icons. @regression', () => {

    // Open Side-Panel
    components.click_side_panel_icon_expand()
    // verificationUtils.elementIsNotVisible(components.elements.side_panel_icon_expand(), "Side-Panel: Expand icon")
    verificationUtils.elementIsVisible(components.elements.side_panel_icon_cross(), "Side-Panel: Cross icon")

    // Close Side-Panel
    components.click_side_panel_icon_cross()
    verificationUtils.elementIsVisible(components.elements.side_panel_icon_expand(), "Side-Panel: Expand icon")
    // verificationUtils.elementIsNotVisible(components.elements.side_panel_icon_cross(), "Side-Panel: Cross icon")
              
  });  


  /**
   * Test case: [Side-Panel] Link: About. Validate that User is able to navigate to official website using About link.
   * @tags {regression}
   */
  it('[Side-Panel] Link: About. Validate that User is able to navigate to official website using About link. @regression', () => {

    // Open Side-Panel
    components.click_side_panel_icon_expand()
    
    // Verify About Link in Side-Panel
    // components.click_side_panel_link_about()

    // // Verify Page URL and Title
    // verificationUtils.pageHasTitle('Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing')
    // verificationUtils.pageHasUrl('https://saucelabs.com/') 
    verificationUtils.elementHasAttributeAndHasValue(components.elements.side_panel_link_about(), "Side-Panel: About link", 'href', 'https://saucelabs.com/')

  });
    
})

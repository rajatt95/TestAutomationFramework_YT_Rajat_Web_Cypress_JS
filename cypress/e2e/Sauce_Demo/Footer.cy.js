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
import footer from '../../support/pages/components/Footer'

// Importing utilities
import verificationUtils from '../../support/utils/VerificationUtils'

/**
 * Test suite for Sauce Demo Footer Component.
 */
describe('Sauce Demo - [Footer]', () => {

  /**
   * Before each test, navigate to the application homepage and login.
   */
  beforeEach(() => {
    // Navigate to the Sauce Demo website before each test using a custom Cypress command
    cy.goToApplication()
    loginPage.loginToApplicationWithValidCredentials()
  })

  /**
   * Test case: [Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity
   * @tags {regression, sanity}
   */
  it('[Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity', () => {
       
    // Verify the social links icon
    verificationUtils.elementIsVisible(footer.elements.link_twitter(), "Footer: Twitter link")
    verificationUtils.elementIsVisible(footer.elements.link_facebook(), "Footer: Facebook link")
    verificationUtils.elementIsVisible(footer.elements.link_linkedIn(), "Footer: LinkedIn link")

    // Verify the copyright message 
    verificationUtils.elementContainsText(footer.elements.msg_copyright(), '© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    
  });  


  /**
   * Test case: [Footer] Links navigation. Validate that User is able to navigate to social platforms using icons.
   * @tags {regression}
   */
  it('[Footer] Links navigation. Validate that User is able to navigate to social platforms using icons. @regression', () => {
   
    // Verify the social links  
    verificationUtils.elementHasAttributeAndHasValue(footer.elements.link_twitter(), "Footer: Twitter link", "href","https://twitter.com/saucelabs")
    verificationUtils.elementHasAttributeAndHasValue(footer.elements.link_facebook(), "Footer: Facebook link", "href","https://www.facebook.com/saucelabs")
    verificationUtils.elementHasAttributeAndHasValue(footer.elements.link_linkedIn(), "Footer: LinkedIn link", "href","https://www.linkedin.com/company/sauce-labs/")

  });  

    
})

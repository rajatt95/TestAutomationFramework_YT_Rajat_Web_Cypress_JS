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

import basePage from './BasePage'


/**
 * LoginPage class representing the login page of the application.
 */
class LoginPage{

    // Defining Web Elements

    elements = {
    
        // XPath for the username textbox
        textbox_username: () => cy.xpath("//input[@id='user-name']"),

        // CSS selector for the password textbox
        textbox_password: () => cy.get('#password'),

        // CSS selector for the login button
        button_LogIn: () => cy.get('#login-button'),

    }

    // Operations/Actions with Web Elements

    /**
    * Perform login to the application with the provided username and password.
    * @param {string} username - The username to be used for login.
    * @param {string} password - The password to be used for login.
    */
    loginToApplication(username, password){

        // Logging the login action with provided username and password
        cy.log('Logging into application using '+ username + ' and '+ password)

        // Filling the username and password fields and clicking the login button
        // this.elements.textbox_username().type(username)
        // this.elements.textbox_password().type(password)
        // this.elements.button_LogIn().click()

        basePage.fillTextBox(this.elements.textbox_username(), username)
        basePage.fillTextBox(this.elements.textbox_password(), password)
        basePage.clickOnWebElement(this.elements.button_LogIn())

    }

}

// Exporting an instance of the LoginPage class to be used by other files
export default new LoginPage
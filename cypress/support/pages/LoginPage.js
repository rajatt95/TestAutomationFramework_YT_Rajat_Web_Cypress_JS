
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
        this.elements.textbox_username().type(username)
        this.elements.textbox_password().type(password)
        this.elements.button_LogIn().click()
        
    }

}

// Exporting an instance of the LoginPage class to be used by other files
export default new LoginPage
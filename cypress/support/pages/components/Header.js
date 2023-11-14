
/**
 * Header class representing the Header component of the application.
 */
class Header{

    // Defining Web Elements

    elements = {
    
        // CSS selector for the Application logo
        logo_application: () => cy.get('.app_logo')

    }

    // Operations/Actions with Web Elements

}

// Exporting an instance of the Header class to be used by other files
export default new Header
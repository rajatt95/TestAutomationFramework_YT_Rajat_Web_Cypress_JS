
/**
 * Footer class representing the Footer component of the application.
 */
class Footer{

    // Defining Web Elements

    elements = {
    
        // CSS selector for the Copyright message 
        msg_copyright: () => cy.get('.footer_copy')

    }

    // Operations/Actions with Web Elements

}

// Exporting an instance of the Footer class to be used by other files
export default new Footer
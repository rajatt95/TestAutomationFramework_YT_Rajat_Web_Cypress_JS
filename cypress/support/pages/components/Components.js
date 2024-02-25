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

import basePage from '../BasePage'

/**
 * Components class representing the components of the application.
 */
class Components{

    // Defining Web Elements

    elements = {
    
        // Header
        header_logo_swag_labs: () => cy.get('.app_logo'),
        header_icon_cart: () => cy.get('#shopping_cart_container'),

        // Footer
        footer_msg_copyright: () => cy.get('.footer_copy'),
        footer_link_linkedIn: () => cy.xpath("//a[normalize-space()='LinkedIn']"),
        footer_link_twitter: () => cy.xpath("//a[normalize-space()='Twitter']"),
        footer_link_facebook: () => cy.xpath("//a[normalize-space()='Facebook']"),

        // Side-Panel
        side_panel_icon_expand: () => cy.get('#react-burger-menu-btn'),
        
    }

    // Operations/Actions with Web Elements

    // Header

    /**
     * Perform a click action on the cart icon in the header.
     */
    click_header_icon_cart(){
        basePage.clickOnWebElement(this.elements.header_icon_cart())
    }

    // Footer

    // Side-Panel

    /**
     * Perform a click action on the expand icon in the side panel.
     */
    click_side_panel_icon_expand(){
        basePage.clickOnWebElement(this.elements.side_panel_icon_expand())
    }

}

// Exporting an instance of the Header class to be used by other files
export default new Components
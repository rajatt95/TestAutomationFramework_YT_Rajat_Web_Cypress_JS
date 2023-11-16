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

/**
 * BasePage class contains common methods to interact with web elements.
 * These methods can be reused across different pages in the application.
 */
class BasePage{

    /**
    * Clicks on the provided web element.
    * @param {Object} element - The web element to click.
    */
    clickOnWebElement(element){
        element.click()
    }

    /**
    * Clears the text from the provided text box element and fills it with the specified text.
    * @param {Object} element - The text box web element.
    * @param {string} textToFill - The text to fill in the text box.
    */
    fillTextBox(element, textToFill){
        element.clear()
        element.type(textToFill)
    }

    /**
    * Triggers a mouse hover event on the provided web element with force.
    * @param {Object} element - The web element to hover over.
    */
    mouseHover_Force(element){
        element.trigger('mouseover', {force:true})
    }

    /**
    * Clicks on the provided web element with force, bypassing any overlay or obstruction.
    * @param {Object} element - The web element to click forcefully.
    */
    clickOnWebElement_Force(element){
        element.click({force:true})
    }


}

// Exporting an instance of the BasePage class to be used by other files
export default new BasePage
/**
 * VerificationUtils class provides methods for asserting different conditions.
 */
class VerificationUtils{

    /**
     * Asserts that an element contains the expected text.
     * @param {Object} targetElement - The target element to check.
     * @param {string} expectedText - The expected text.
     */
    elementContainsText(targetElement, expectedText){
        console.log(`Asserts that an element contains the expected text '${expectedText}'.`)
        targetElement.should('include.text', expectedText)
    }

    /**
     * Asserts that an element has the expected text.
     * @param {Object} targetElement - The target element to check.
     * @param {string} expectedText - The expected text.
     */
    elementHasText(targetElement, expectedText){
        console.log(`Asserts that an element has the expected text '${expectedText}'.`)
        targetElement.should('have.text', expectedText)
    }

    /**
     * Asserts that an element is visible.
     * @param {Object} targetElement - The target element to check.
     * @param {string} targetElementName - The name of the target element.
     */
    elementIsVisible(targetElement, targetElementName){
        console.log(`Asserts that '${targetElementName}' is visible.`)
        targetElement.should('be.visible')
    }

    /**
     * Asserts that an element is not visible.
     * @param {Object} targetElement - The target element to check.
     * @param {string} targetElementName - The name of the target element.
     */
    elementIsNotVisible(targetElement, targetElementName){
        console.log(`Asserts that '${targetElementName}' is not visible.`)
        targetElement.should('not.exist')
    }

    /**
     * Asserts that an element has a specific attribute with the expected value.
     * @param {Object} targetElement - The target element to check.
     * @param {string} targetElementName - The name of the target element.
     * @param {string} attribute - The attribute to check.
     * @param {string} attributeValue - The expected value of the attribute.
     */
    elementHasAttributeAndHasValue(targetElement, targetElementName, attribute, attributeValue){
        console.log(`Asserts that '${targetElementName}' has a specific attribute '${attribute}' with the expected value '${attributeValue}'.`)
        targetElement.should('have.attr', attribute, attributeValue);
    }    

    /**
     * Asserts that the current page URL contains the expected substring.
     * @param {string} expectedUrl - The expected substring in the URL.
     */
    pageContainsUrl(expectedUrl){   
        const currentPageUrl = cy.url()        
        console.log(`Asserts that the current page URL '${currentPageUrl}' contains the expected substring '${expectedUrl}'.`)
        currentPageUrl.should('include', expectedUrl);
    }

    /**
     * Asserts that the current page URL matches the expected substring.
     * @param {string} expectedUrl - The expected substring in the URL.
     */
    pageHasUrl(expectedUrl){
        console.log(`Asserts that the current page URL matches the expected substring '${expectedUrl}'.`)
        cy.url().should('eq', expectedUrl);
    }   

    /**
     * Asserts that the current page Title contains the expected substring.
     * @param {string} expectedTitle - The expected substring in the Title.
     */
    pageContainsTitle(expectedTitle){   
        const currentPageTitle = cy.title()         
        console.log(`Asserts that the current page Title '${currentPageTitle}' contains the expected substring '${expectedTitle}'.`)
        currentPageTitle.should('include', expectedTitle);
    }

    /**
     * Asserts that the current page Title matches the expected substring.
     * @param {string} expectedTitle - The expected substring in the Title.
     */
    pageHasTitle(expectedTitle){        
        console.log(`Asserts that the current page Title matches the expected substring '${expectedTitle}'.`)
        cy.title().should('eq', expectedTitle);
    }

}


/**
 * Exports the VerificationUtils class as the default export of this module.
 * @module VerificationUtils
 */
export default new VerificationUtils;
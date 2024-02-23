/**
 * WaitUtils class provides methods for introducing waits during test execution.
 */
class WaitUtils{

    /**
     * Waits for the given amount of time in seconds.
     * @param {number} timeInSeconds - The time to wait in seconds.
     */
    waitForGivenTime(timeInSeconds){
        console.log(`Waiting for '${timeInSeconds}' seconds.`)
        cy.wait(timeInSeconds * 1000)
    }

}

/**
 * Exports the Waits class as the default export of this module.
 * @module WaitUtils
 */
export default new WaitUtils;
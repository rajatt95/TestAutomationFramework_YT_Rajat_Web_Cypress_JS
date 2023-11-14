
/**
 * ProductsPage class representing the products page of the application.
 */
class ProductsPage{

    // Defining Web Elements

    elements = {
    
        // CSS selector for the Products heading
        heading_products: () => cy.get('.title')

    }

    // Operations/Actions with Web Elements

}

// Exporting an instance of the ProductsPage class to be used by other files
export default new ProductsPage
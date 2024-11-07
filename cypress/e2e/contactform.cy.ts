it('sends a message successfully', () => {
    const name = 'Cypress Test User';
    const email = 'email@email.com';
    const phone = '1234567890';
    const subject = `Test Cy message ${Cypress._.random(1e5)}`;
    const body = Cypress._.repeat('test message body', 5);;

    cy.visit('/');

    cy.get('.row.contact form').within(() => {
        /**
         * TODO: Find the Contact form and provide it with the values given above
         * and click the submit button
         */
    });

    // The form was submitted
    cy.log('** checking messages **');

    // Axios rejects a promise after checking auth rout right away
    cy.on('uncaught:exception', () => false);

    // Check that a message was recieved
    cy.visit('/#/admin/')

    /**
     * TODO: Find the username and password fields and provide it with the values username and password
     * and click the submit button
     */

    cy.contains('.navbar', 'B&B Booking Management')
        .should('be.visible')
        .find(';a[href="#/admin/messages"]')
        .click();

    // TODO: Check if the hash of the url is /#/admin/messages

    cy.get('.row.detail')
        .should('have.length.greaterThan', 0)
        .contains('.row', subject)
        .should('have.class', 'read-false')
        .click();

    // TODO: Between the should and contains, check if the the submitted information is present
    cy.contains('.message-modal', subject)
        .should('be.visible')
        .contains('button', 'Close')
        .click();

    cy.contains('.message-modal', subject).should('not.exist')
        .should('have.class', 'read-true')
        .and('not.have.class', 'read-false');
});
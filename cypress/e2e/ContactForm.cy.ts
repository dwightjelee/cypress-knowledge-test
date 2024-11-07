describe('The contact form', () => {
  it('sends a message successfully', () => {
    const name = 'Test Cy User';
    const email = 'email@email.com';
    const phone = '123-456-7890';
    const subject = `Test Cy message ${Cypress._.random(1e5)}`;
    const body = Cypress._.repeat('message body ', 5);

    cy.visit('/');
    cy.get('.row.contact form').within(() => {
      cy.get('[data-testid="ContactName"]').type(name);
      cy.get('[data-testid="ContactEmail"]').type(email);
      cy.get('[data-testid="ContactPhone"]').type(phone);
      cy.get('[data-testid="ContactSubject"]').type(subject);
      cy.get('[data-testid="ContactDescription"]').type(body);
      cy.get('#submitContact').click();
    });
    // the form was submitted
    cy.log('**checking messages**');
  });
});

describe('Basic Angular Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the welcome message', () => {
    cy.get('h1').should('be.visible')
      .and('contain.text', 'Hello from Angular');
  });

  it('should have a working Angular docs link', () => {
    cy.get('a').should('be.visible')
      .and('have.attr', 'href', 'https://angular.dev/overview')
      .and('have.attr', 'target', '_blank');
  });
});
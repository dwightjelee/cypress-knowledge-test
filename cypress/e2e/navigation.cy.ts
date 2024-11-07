describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have proper page title', () => {
    cy.title().should('equal', 'My app');
  });

  it('should not have 404 errors', () => {
    cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });
    
    cy.get('@consoleError').should('not.be.called');
  });
});
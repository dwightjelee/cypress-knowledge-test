describe('Angular App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.get('h1').should('contain.text', 'Hello from Angular');
  });

  it('should have Angular docs link', () => {
    cy.get('a')
      .should('have.attr', 'href', 'https://angular.dev/overview')
      .and('have.attr', 'target', '_blank')
      .and('contain.text', 'Learn more about Angular');
  });

  it('should load without errors', () => {
    cy.window().should('exist');
    cy.document().should('exist');
  });
});
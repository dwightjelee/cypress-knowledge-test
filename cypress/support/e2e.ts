// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
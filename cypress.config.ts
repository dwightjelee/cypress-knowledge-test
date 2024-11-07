import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationintesting.online/', // Define base URL for tests
    specPattern: 'cypress/e2e/*.cy.ts',            // Use specPattern to specify the test files
    setupNodeEvents(on, config) {
      // You can add custom node event handling here if needed
      // For now, this is an empty function
    },
  },
});

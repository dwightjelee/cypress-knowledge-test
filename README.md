# Automation Testing with Cypress

This project contains automated tests for the website [Automation in Testing](https://automationintesting.online/).

## Setup and run Cypress Tests

1. **Install NodeJS, NPM and Cypress**
    Open Command Prompt as Administrator: Right-click on the Start menu and select "Command Prompt (Admin)".
    Check if you have node intalled:
    ```bash
    node -v
    ```
    
    Check if you have npm installed:
    ```bash
    npm -v
    ```
    
    If not then run the following commands to install Node.js and npm:
    ```bash
    winget install Node.js
    ```
    This command will download and install the latest version of Node.js and npm.

2. **Install project dependencies**:
    Go to root directory of this test project and run the following command:
    ```bash
    npm install
    ```

3. **Open Cypress**:
    ```bash
    npx cypress open
    ```
   This command will open the Cypress Test Runner where you can see and run all the test files.

4. **Run Tests from CLI**:
    ```bash
    npx cypress run
    ```
   This command will run all the tests in the project from the command line.

## Test Files

The test files are located in the `cypress/e2e` directory.

### Test 1: Fixing TODO Comments

Open the test file `cypress/e2e/contactform.cy.ts` and finish the tests by fulfilling the TODO's found in the file.
Ensure all TODO comments in the test files are resolved and the tests are functioning as expected. Follow the guidelines and best practices mentioned in the Cypress documentation for writing effective tests.

### Test 2: Write booking test

Create a new file called `room-managment.cy.ts` in the `cypress/e2e` directory and create tests to test the following:
1. Login on the admin panel
2. On the `Rooms` page create a new **family room** that is **accessible** and has **WiFi** and a **TV**
3. After creating the room, click on the new record to change it's description and add an image (you can search for an image on Google).
4. Go back to the homepage to see if the newly created room is visible and if all details that you've added are present.

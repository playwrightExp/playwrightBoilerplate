# Playwright Cucumber TS Demo Framework

A framwork made with Playwright, Cucumber and Typescript that supports chromium,firfox and safari . This repo demonstrates how to write test scenarios using Gherkin and execute test steps using Playwright. The framework uses typescript as the language.

## Installation

- The following tools are required before we proceed with the setup.
  - Node js(version 20.x or later)
  - Visual studio code or alternative IDE of your choice
  - GIT
- Step 1:Clone the repository using the following command in the terminal:
  ```bash
  git clone https://github.com/narayananpalani/playwrightBoilerplate.git
  ```
- Step 2:Navigate to the cloned project location and run the following command in the terminal:
  ```bash
  npm install
  ```
- Step 3:Run the following command in the terminal to setup playwright:
  ```bash
  npx playwright install
  ```

- Step 4:Change the browser of choice at src/config/test.config.ts:
  ```
  browser: Browsers.FIRFOX
  ```  

  ```
  browser: Browsers.SAFARI
  ``` 

  ```
  browser: Browsers.CHROMIUM
  ``` 
  - Note: This is optional step since Chromium (a.k.a) Google Chrome is a default browser while running the tests
  
- Step 5:To run the project, run the following command in the terminal:
  ```bash
  npm run test
  ```

  - Step 6:To run the project on specific scenarios like customer, run the following command in the terminal:
  ```bash
  npm run customertest
  ```

   - Step 6:To run the project on specific scenarios like deposit, run the following command in the terminal:
  ```bash
  npm run deposittest
  ```

   - Step 6:To run the project on specific scenarios like open account, run the following command in the terminal:
  ```bash
  npm run openaccounttest
  ```

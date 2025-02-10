# Playwright Cucumber TS based Page Object Model Framework

A framwork made with Playwright, Cucumber and Typescript that supports chromium,firfox and safari . This repo demonstrates how to write test scenarios using Gherkin and execute test steps using Playwright. The framework uses typescript as the language.

## Overview
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7294696630966976514" height="1831" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

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
## Configuration
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

  ## Code Development

  - Page Objects:  Managed at test/pages/*.* for better page wise maintainence of locators
  - Cucumber BDD Scanerios:  Managed at test/features/*.* for better behavior driven development in Given, When, Then format
  - Test Data:  Managed at test/test_data/*.* for data usage without duplication
  - Test Steps:  Corresponding steps of gherkin BDD are managed at test/steps/*.* 
  - Reporting:  Managed at test/utils/*.* for simplicity on report integrations on longevity strategy
  
## Execution
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


  ## Results

  ### multiple-cucumber-html-reporter has been integrated to the framework to enable reporting post execution and the files stored in the path below
  - Note: please make sure to add the path in .gitignore to have clean repository maintanence

 - Step 6:To verify the results, navigate to the path in the project folder structure and open this html file in Google Chrome or browser of your choice:
  ```bash
  test-results/reports/index.html
  ```

  ## Branches
- Main: Stable code for the scenarios written in Cucumber BDD to get executed via Playwright

- a11y_visual: Playwright currently got limitations on visual regression and accessibility since open issues-so these code will get merged to main once any patches being made available in near future.

Refer-visual testing limitation with cucumber-js: https://www.linkedin.com/posts/narayananpalani_playwright-cucumber-activity-7294688229654495232-L89k?utm_source=share&utm_medium=member_desktop

Refer-accessibility limitation with cucumber-js: https://www.linkedin.com/posts/narayananpalani_accessibility-playwright-cucumber-activity-7294731875535716352-U2Zb?utm_source=share&utm_medium=member_desktop

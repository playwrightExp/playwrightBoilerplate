/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import login from '../pages/login.page'
import name from '../pages/name.page '
import customer from '../pages/customer.page '
import base from '../actions/base.action'
import { config } from '../../config/test.config'
import user from '../fixtures/test_data.json'
const basePage = new base(global.page)

Given('user navigate to login page', async function () {
  await global.page.goto(config.baseURL)
})

When('user make a deposit', async function () {
  await basePage.clickOnElement(login.customerButtonSelector);
  console.log('user successfully navigated to customer login');
  await global.page
  .locator('#userSelect')
  .click()
  await global.page
  .locator('#userSelect')
  .selectOption({index:3});
  await basePage.clickOnElement(name.loginButtonSelector);
  await basePage.clickOnElement(customer.depositButtonSelector);
  await basePage.typeInTextField(customer.amountTextSelector, '2');
  await basePage.clickOnElement(customer.depositFormSubmitButtonSelector);
  await basePage.validateTextInElement(customer.depositSuccessMsgSelector, 'Deposit Successful')
})

When('user make an empty deposit', async function () {
  await basePage.clickOnElement(login.customerButtonSelector);
  console.log('user successfully navigated to customer login');
  await global.page
  .locator('#userSelect')
  .click()
  await global.page
  .locator('#userSelect')
  .selectOption({index:3});
  await basePage.clickOnElement(name.loginButtonSelector);
  await basePage.clickOnElement(customer.depositButtonSelector);
  await basePage.typeInTextField(customer.amountTextSelector, '');
  await basePage.clickOnElement(customer.depositFormSubmitButtonSelector);
})

When('error message displayed on deposit text field', async function () {
  await basePage.validateTextInElement(customer.depositFormSubmitButtonSelector, 'Deposit')
  await global.page
  .locator(customer.depositSuccessMsgSelector)
  .isDisabled;
})

Then('transaction updated successfully', async function () {
  await basePage.clickOnElement(customer.transactionsButtonSelector);
  await basePage.validateTextInElement(customer.creditMsgSelector, 'Credit')
})

Then('check transaction in few seconds delay that to get updated successfully', async function () {
  setDefaultTimeout(60 * 1000 * 2)
  await basePage.clickOnElement(customer.transactionsButtonSelector);
  await basePage.validateTextInElement(customer.creditMsgSelector, 'Credit')
})






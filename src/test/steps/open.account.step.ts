/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { expect} from "@playwright/test"
import login from '../pages/login.page'
import name from '../pages/name.page '
import customer from '../pages/customer.page '
import bankmanager from '../pages/bankmanager.page'
import base from '../actions/base.action'
import { config } from '../../config/test.config'
import user from '../fixtures/test_data.json'
const basePage = new base(global.page)

// Given user navigate to login page
// When open a new account for existing customer
// Then new account added for the existing customer successfully

When('open a new account in {string} for existing customer', async function (currency) {
  await basePage.clickOnElement(login.bankmgrButtonSelector);
  await basePage.clickOnElement(bankmanager.openAccountButtonSelector);
  await global.page
  .locator('#userSelect')
  .selectOption({index:1});
  await global.page
  .locator('#currency')
  .selectOption(currency);
  await basePage.clickOnElement(bankmanager.processButtonSelector);
  global.page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('Account created successfully with account Number :')
  }
  )
})


Then('new account added for the existing customer successfully', async function () {
  global.page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('Account created successfully with account Number :')
  }
  )
})


export enum Browsers {
  CHROMIUM = 'chromium',
  WEBKIT = 'webkit',
  FIREFOX = 'firefox',
}

export const config = {
  baseURL: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  browserOptions: {
    headless: false,
  },
  browser: Browsers.CHROMIUM,
}

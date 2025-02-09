export enum Browsers {
  CHROMIUM = 'chromium',
  FIREFOX = 'firefox',
  SAFARI = 'webkit',
}

export const config = {
  baseURL: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  browserOptions: {
    headless: false,
  },
  browser: Browsers.CHROMIUM,
}

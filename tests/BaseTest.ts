import { PageManager } from '../Pages/PageManager';
import {test as base} from '@playwright/test';

export const test = base.extend<{pageManager: PageManager}>({
    page: async ({browser}, use) => {
        const page = await browser.newPage();
        await page.goto('/');
        await use(page);
      },

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
      },
})
export class BaseTest{
  static standartUserName = 'standard_user';
  static password = 'secret_sauce';
  static titleProductsPage = 'Products';
  static titleYourCartPage = 'Your Cart';
  static titleCheckoutYourInformationPage = 'Checkout: Your Information';
  static titleCheckoutOverviewPage = 'Checkout: Overview';
  static titleCheckoutCompletePage = 'Checkout: Complete!';
}

export { expect } from '@playwright/test';
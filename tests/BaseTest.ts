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

export { expect } from '@playwright/test';
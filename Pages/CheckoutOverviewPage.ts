import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage{
    Locators = {
        TitleOverview: this.page.locator('"Checkout: Overview"'),
        LabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
    };

    Buttons = {
        Finish: this.page.locator('button#finish'),
    };
}
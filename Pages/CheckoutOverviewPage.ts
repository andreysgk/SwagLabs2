import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage{
    Locators = {
        Title: this.page.locator(this.MainLocators.Title),
        LabsBackpack: this.page.locator(".inventory_item_name"),
    };

    Buttons = {
        Finish: this.page.locator('button#finish'),
    };
}
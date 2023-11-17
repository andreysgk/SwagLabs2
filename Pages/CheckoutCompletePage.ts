import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage{
    Locators = {
        Title: this.page.locator(this.MainLocators.Title),
        CompleteContainer: this.page.locator('.checkout_complete_container'),
    };
}
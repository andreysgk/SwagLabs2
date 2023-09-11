import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage{
    Locators = {
        TitleComplete: this.page.locator('"Checkout: Complete!"'),
        CompleteContainer: this.page.locator('.checkout_complete_container'),
    };
}
import { BasePage } from './BasePage';

export class CartPage extends BasePage{
    Locators = {
        Title: this.page.locator(this.MainLocators.Title),
        LabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
        DescriptionBackpackInCart: this.page.locator("//div[@class='inventory_item_desc']"),
        PriceBackpackInCart: this.page.locator("//div[@class='inventory_item_price']"),
        CartList: this.page.locator('.cart_list'),
    };

    Buttons = {
        Checkout: this.page.locator("//button[@id='checkout']"),
        ContinueShopping: this.page.locator("//button[@id='continue-shopping']"),
    };
}
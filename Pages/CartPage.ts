import { BasePage } from './BasePage';

export class CartPage extends BasePage{
    Locators = {
        TitleYourCart: this.page.locator('"Your Cart"'),
        LabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
        DescriptionBackpackInCart: this.page.locator("//div[@class='inventory_item_desc']"),
        PriceBackpackInCart: this.page.locator("//div[@class='inventory_item_price']"),
        CartList: this.page.locator('.cart_list'),
    };

    Buttons = {
        Checkout: this.page.locator("//button[@id='checkout']"),
        ContinueShopping: this.page.locator("//button[@id='continue-shopping']"),
    };

    constructor(page){
        super(page)
    };
}
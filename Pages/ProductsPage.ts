import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage{
    Locators = {
        TitleProducts: this.page.locator('"Products"'),
        ElementLabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
        DetailedNameBackpack: this.page.locator("//div[@class='inventory_details_name large_size']"),
        DetailedDescriptionBackpack: this.page.locator("//div[@class='inventory_details_desc large_size']"),
        DetailedPriceBackpack: this.page.locator("//div[@class='inventory_details_price']"),
        IconCart: this.page.locator(".shopping_cart_link"),
        FilterElementAZ: this.page.locator("//option[@value='az']"),
        FilterElementZA: this.page.locator('select', { hasText: 'Name (Z to A)' }),
        InventoryList: this.page.locator('.inventory_item'),
    };

    Buttons = {
        AddToCartLabsBackpack: this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']"),
        RemoveCartLabsBackpack: this.page.locator("//button[@id='remove-sauce-labs-backpack']"),
        Filter: this.page.locator("[class='select_container']"),
    };
}
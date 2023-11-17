import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage{
    Locators = {
        Title: this.page.locator(this.MainLocators.Title),
        ElementLabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
        DetailedName: this.page.locator('.inventory_details_name.large_size'),
        DetailedDescription: this.page.locator('.inventory_details_desc.large_size'),
        DetailedPrice: this.page.locator('.inventory_details_price'),
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
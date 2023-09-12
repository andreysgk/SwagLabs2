import { test, expect, BaseTest } from './BaseTest';
test.describe('Login page tests', async () => {
    const NAME_BACKPACK = 'Sauce Labs Backpack';
    const DESCRIPTION_BACKPACK = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
    const PRICE_BACKPACK = '$29.99';
    const NAME_REMOVE_BUTTON = 'Remove';

    test('Compare the description of the backpack', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toHaveText(BaseTest.titleYourCartPage)
        await expect(pageManager.cartPage.Locators.LabsBackpack).toHaveText(NAME_BACKPACK);
        await expect(pageManager.cartPage.Locators.DescriptionBackpackInCart).toContainText(DESCRIPTION_BACKPACK);
        await expect(pageManager.cartPage.Locators.PriceBackpackInCart).toContainText(PRICE_BACKPACK);
        await expect(pageManager.productsPage.Buttons.RemoveCartLabsBackpack).toHaveText(NAME_REMOVE_BUTTON);
    })

    test('The continue shopping button is active', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        expect(pageManager.cartPage.Buttons.ContinueShopping).toBeVisible();
        await pageManager.cartPage.Buttons.ContinueShopping.click();
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
    })

    test('Remove backpack from cart', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        expect(pageManager.cartPage.Locators.LabsBackpack).toBeVisible();
        await pageManager.productsPage.Buttons.RemoveCartLabsBackpack.click();
        expect(pageManager.cartPage.Locators.LabsBackpack).toBeHidden();
        await expect(pageManager.productsPage.Locators.IconCart).toBeEmpty();
    })
});

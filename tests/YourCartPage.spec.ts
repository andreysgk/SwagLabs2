import { test, expect } from './BaseTest';

test('compare the description of the backpack', async({pageManager})=>{
    await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
    await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
    await pageManager.productsPage.Locators.IconCart.click();
    await expect(pageManager.cartPage.Locators.TitleYourCart).toHaveText('Your Cart')
    await expect(pageManager.cartPage.Locators.LabsBackpack).toHaveText('Sauce Labs Backpack');
    await expect(pageManager.cartPage.Locators.DescriptionBackpackInCart).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(pageManager.cartPage.Locators.PriceBackpackInCart).toContainText('$29.99');
    await expect(pageManager.productsPage.Buttons.RemoveCartLabsBackpack).toHaveText('Remove');
})

test('the continue shopping button is active', async({pageManager})=>{
    await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
    await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
    await pageManager.productsPage.Locators.IconCart.click();
    expect(pageManager.cartPage.Buttons.ContinueShopping).toBeVisible();
    await pageManager.cartPage.Buttons.ContinueShopping.click();
    await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
})

test('remove backpack from cart', async({pageManager})=>{
    await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
    await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
    await pageManager.productsPage.Locators.IconCart.click();
    expect(pageManager.cartPage.Locators.LabsBackpack).toBeVisible();
    await pageManager.productsPage.Buttons.RemoveCartLabsBackpack.click();
    expect(pageManager.cartPage.Locators.LabsBackpack).toBeHidden();
    await expect(pageManager.productsPage.Locators.IconCart).toBeEmpty();
})


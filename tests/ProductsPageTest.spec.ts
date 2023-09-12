import { test, expect } from './BaseTest';

test.describe('Products page tests', async () => {
    const firstName = 'Andrew';
    const lastName = 'Zaits';
    const zipPostalCode = '212013';

    test('Detailed info about backpack', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
        await pageManager.productsPage.Locators.ElementLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.DetailedNameBackpack).toHaveText('Sauce Labs Backpack');
        await expect(pageManager.productsPage.Locators.DetailedDescriptionBackpack).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(pageManager.productsPage.Locators.DetailedPriceBackpack).toContainText('$29.99');
    })

    test('Check that the shopping cart page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toBeVisible();
    })

    test('The add to cart button changes to remove', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Buttons.AddToCartLabsBackpack).toHaveText('Add to cart');
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Buttons.RemoveCartLabsBackpack).toHaveText('Remove');
    })

    test('Labs Backpack to cart and checkout', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.TitleProducts).toHaveText('Products');
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toHaveText('Your Cart')
        await expect(pageManager.cartPage.Locators.LabsBackpack).toHaveText('Sauce Labs Backpack');
        await pageManager.cartPage.Buttons.Checkout.click();
        await expect(pageManager.checkoutYourInformationPage.Locators.TitleYourInformation).toHaveText('Checkout: Your Information');
        await pageManager.checkoutYourInformationPage.fillYourInformation(firstName, lastName, zipPostalCode);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await expect(pageManager.checkoutOverviewPage.Locators.TitleOverview).toHaveText('Checkout: Overview');
        await expect(pageManager.checkoutOverviewPage.Locators.LabsBackpack).toHaveText('Sauce Labs Backpack');
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.TitleComplete).toHaveText('Checkout: Complete!');
        await expect(pageManager.checkoutCompletePage.Locators.CompleteContainer).toBeVisible();
    })

    test('Make a checkout without adding a thing to cart. @negative test', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await pageManager.productsPage.Locators.IconCart.click();
        await pageManager.cartPage.Buttons.Checkout.click();
        await expect(pageManager.checkoutYourInformationPage.Locators.TitleYourInformation).toHaveText('Checkout: Your Information');
        await pageManager.checkoutYourInformationPage.fillYourInformation(firstName, lastName, zipPostalCode);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.TitleComplete).toHaveText('Checkout: Complete!');
        await expect(pageManager.checkoutCompletePage.Locators.CompleteContainer).toBeVisible();
    })

    test('Update the cart icon to the value 1', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.IconCart).toBeEmpty();
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.IconCart).toContainText('1');
    })

    test('Number of products', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.InventoryList).toHaveCount(6);
    })

    test.skip('Product filter', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await pageManager.productsPage.Buttons.Filter.click();
        await pageManager.productsPage.Locators.FilterElementZA.click();
        //Error: locator.click: Target closed
    })
});
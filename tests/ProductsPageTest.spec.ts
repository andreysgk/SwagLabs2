import { test, expect, BaseTest } from './BaseTest';

test.describe('Products page tests', async () => {
    const firstName = 'Andrew';
    const lastName = 'Zaits';
    const zipPostalCode = '212013';
    const nameBackpack = 'Sauce Labs Backpack';
    const descriptionBackpack = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
    const priceBackpack = '$29.99';
    const nameAddToCartButton = 'Add to cart';
    const NameRemoveButton = 'Remove';

    test('Detailed info about backpack', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
        await pageManager.productsPage.Locators.ElementLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.DetailedNameBackpack).toHaveText(nameBackpack);
        await expect(pageManager.productsPage.Locators.DetailedDescriptionBackpack).toContainText(descriptionBackpack);
        await expect(pageManager.productsPage.Locators.DetailedPriceBackpack).toContainText(priceBackpack);
    })

    test('Check that the shopping cart page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toBeVisible();
    })

    test('The add to cart button changes to remove', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Buttons.AddToCartLabsBackpack).toHaveText(nameAddToCartButton);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Buttons.RemoveCartLabsBackpack).toHaveText(NameRemoveButton);
    })

    test('Labs Backpack to cart and checkout', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.TitleProducts).toHaveText(BaseTest.titleProductsPage);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toHaveText(BaseTest.titleYourCartPage)
        await expect(pageManager.cartPage.Locators.LabsBackpack).toHaveText(nameBackpack);
        await pageManager.cartPage.Buttons.Checkout.click();
        await expect(pageManager.checkoutYourInformationPage.Locators.TitleYourInformation).toHaveText(BaseTest.titleCheckoutYourInformationPage);
        await pageManager.checkoutYourInformationPage.fillYourInformation(firstName, lastName, zipPostalCode);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await expect(pageManager.checkoutOverviewPage.Locators.TitleOverview).toHaveText(BaseTest.titleCheckoutOverviewPage);
        await expect(pageManager.checkoutOverviewPage.Locators.LabsBackpack).toHaveText(nameBackpack);
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.TitleComplete).toHaveText(BaseTest.titleCheckoutCompletePage);
        await expect(pageManager.checkoutCompletePage.Locators.CompleteContainer).toBeVisible();
    })

    test('Make a checkout without adding a thing to cart. @negative test', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Locators.IconCart.click();
        await pageManager.cartPage.Buttons.Checkout.click();
        await expect(pageManager.checkoutYourInformationPage.Locators.TitleYourInformation).toHaveText(BaseTest.titleCheckoutYourInformationPage);
        await pageManager.checkoutYourInformationPage.fillYourInformation(firstName, lastName, zipPostalCode);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.TitleComplete).toHaveText(BaseTest.titleCheckoutCompletePage);
        await expect(pageManager.checkoutCompletePage.Locators.CompleteContainer).toBeVisible();
    })

    test('Update the cart icon to the value 1', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.IconCart).toBeEmpty();
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.IconCart).toContainText('1');
    })

    test('Number of products', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.InventoryList).toHaveCount(6);
    })

    test.skip('Product filter', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.Filter.click();
        await pageManager.productsPage.Locators.FilterElementZA.click();
        //Error: locator.click: Target closed
    })
});
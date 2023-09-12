import { test, expect, BaseTest } from './BaseTest';

test.describe('Products page tests', async () => {
    const FIRST_NAME = 'Andrew';
    const LAST_NAME = 'Zaits';
    const ZIP_POSTAL_CODE = '212013';
    const NAME_BACKPACK = 'Sauce Labs Backpack';
    const DESCRIPTION_BACKPACK = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
    const PRICE_BACKPACK = '$29.99'; 
    const NAME_ADD_TO_CART_BUTTON = 'Add to cart';
    const NAME_REMOVE_BUTTON = 'Remove';
    const NUMBER_OF_PRODUCTS = 6;

    test('Check that the producs page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
    })

    test('Detailed info about backpack', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Locators.ElementLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.DetailedNameBackpack).toHaveText(NAME_BACKPACK);
        await expect(pageManager.productsPage.Locators.DetailedDescriptionBackpack).toContainText(DESCRIPTION_BACKPACK);
        await expect(pageManager.productsPage.Locators.DetailedPriceBackpack).toContainText(PRICE_BACKPACK);
    })

    test('Check that the shopping cart page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toBeVisible();
    })

    test('The add to cart button changes to remove', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Buttons.AddToCartLabsBackpack).toHaveText(NAME_ADD_TO_CART_BUTTON);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Buttons.RemoveCartLabsBackpack).toHaveText(NAME_REMOVE_BUTTON);
    })

    test('Check that the your cart page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.TitleYourCart).toHaveText(BaseTest.titleYourCartPage)
    })

    test('Check that the "Checkout: Your Information page" has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await pageManager.cartPage.Buttons.Checkout.click();
        await expect(pageManager.checkoutYourInformationPage.Locators.TitleYourInformation).toHaveText(BaseTest.titleCheckoutYourInformationPage);
    })

    test('Check that the "Checkout: Overview" has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await pageManager.cartPage.Buttons.Checkout.click();
        await pageManager.checkoutYourInformationPage.fillYourInformation(FIRST_NAME, LAST_NAME, ZIP_POSTAL_CODE);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await expect(pageManager.checkoutOverviewPage.Locators.TitleOverview).toHaveText(BaseTest.titleCheckoutOverviewPage);
    })

    test('Check that the "Checkout: Complete!" has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await pageManager.cartPage.Buttons.Checkout.click();
        await pageManager.checkoutYourInformationPage.fillYourInformation(FIRST_NAME, LAST_NAME, ZIP_POSTAL_CODE);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.TitleComplete).toHaveText(BaseTest.titleCheckoutCompletePage);
    })


    test('Labs Backpack to cart and checkout', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await pageManager.productsPage.Locators.IconCart.click();
        await expect(pageManager.cartPage.Locators.LabsBackpack).toHaveText(NAME_BACKPACK);
        await pageManager.cartPage.Buttons.Checkout.click();
        await pageManager.checkoutYourInformationPage.fillYourInformation(FIRST_NAME, LAST_NAME, ZIP_POSTAL_CODE);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await expect(pageManager.checkoutOverviewPage.Locators.LabsBackpack).toHaveText(NAME_BACKPACK);
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.CompleteContainer).toBeVisible();
    })

    test('Make a checkout without adding a thing to cart. @negative test', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Locators.IconCart.click();
        await pageManager.cartPage.Buttons.Checkout.click();
        await pageManager.checkoutYourInformationPage.fillYourInformation(FIRST_NAME, LAST_NAME, ZIP_POSTAL_CODE);
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await pageManager.checkoutOverviewPage.Buttons.Finish.click();
        await expect(pageManager.checkoutCompletePage.Locators.CompleteContainer).toBeVisible();
    })

    test('Update the cart icon to the value 1', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.IconCart).toBeEmpty();
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.IconCart).toContainText('1');
    })

    test.only('Number of products', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.InventoryList).toHaveCount(NUMBER_OF_PRODUCTS);
    })

    test.skip('Product filter', async({pageManager})=>{ //Error: locator.click: Target closed
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await pageManager.productsPage.Buttons.Filter.click();
        await pageManager.productsPage.Locators.FilterElementZA.click();
    })
});
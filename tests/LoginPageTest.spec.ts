import { test, expect } from './BaseTest';
test.describe('Products page tests', async () => {
    const standartUserName = 'standard_user';
    const lockedOutUserName = 'locked_out_user';
    const unknownUserName = 'abrakadabra';
    const password = 'secret_sauce';
    const errorUknounUser = 'Epic sadface: Username and password do not match any user in this service';
    const errorLockedOutUser = 'Epic sadface: Sorry, this user has been locked out.';

    test('Log In, standard_user', async({pageManager})=>{
        await pageManager.loginPage.logIn(standartUserName, password);
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
    })

    test('Log In, unknown user', async({pageManager})=>{
        await pageManager.loginPage.logIn(unknownUserName, password);
        await expect(pageManager.loginPage.Locators.Error).toBeVisible();
        await expect(pageManager.loginPage.Locators.Error).toHaveText(errorUknounUser);
    })

    test('Log In, locked out user', async({pageManager})=>{
        await pageManager.loginPage.logIn(lockedOutUserName, password);
        await expect(pageManager.loginPage.Locators.Error).toBeVisible();
        await expect(pageManager.loginPage.Locators.Error).toHaveText(errorLockedOutUser);
    })
});
import { test, expect, BaseTest } from './BaseTest';
test.describe('Login page tests', async () => {
    const LOCKED_OUT_USER_NAME = 'locked_out_user';  
    const UNKNOWN_USER_NAME = 'abrakadabra'; 
    const ERROR_UNKNOWN_USER = 'Epic sadface: Username and password do not match any user in this service';
    const ERROR_LOCKED_OUT_USER = 'Epic sadface: Sorry, this user has been locked out.';

    test('Log In, standard_user', async({pageManager})=>{
        await pageManager.loginPage.logIn(BaseTest.standartUserName, BaseTest.password);
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
    })

    test('Log In, unknown user', async({pageManager})=>{
        await pageManager.loginPage.logIn(UNKNOWN_USER_NAME, BaseTest.password);
        await expect(pageManager.loginPage.Locators.Error).toBeVisible();
        await expect(pageManager.loginPage.Locators.Error).toHaveText(ERROR_UNKNOWN_USER);
    })

    test('Log In, locked out user', async({pageManager})=>{
        await pageManager.loginPage.logIn(LOCKED_OUT_USER_NAME, BaseTest.password);
        await expect(pageManager.loginPage.Locators.Error).toBeVisible();
        await expect(pageManager.loginPage.Locators.Error).toHaveText(ERROR_LOCKED_OUT_USER);
    })
});
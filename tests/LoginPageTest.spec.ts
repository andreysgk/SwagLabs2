import { test, expect } from './BaseTest';

    test('Log In, standard_user', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.TitleProducts).toBeVisible();
    })

    test('Log In, unknown user', async({pageManager})=>{
        await pageManager.loginPage.logIn('abrakadabra','abrakadabra');
        await expect(pageManager.loginPage.Locators.Error).toBeVisible();
        await expect(pageManager.loginPage.Locators.Error).toHaveText("Epic sadface: Username and password do not match any user in this service");
    })

    test('Log In, locked out user', async({pageManager})=>{
        await pageManager.loginPage.logIn('locked_out_user', 'secret_sauce');
        await expect(pageManager.loginPage.Locators.Error).toBeVisible();
        await expect(pageManager.loginPage.Locators.Error).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
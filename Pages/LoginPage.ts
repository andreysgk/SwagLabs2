import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    Locators = {
        Error: this.page.locator("//div[@class='error-message-container error']/h3"),
    };

    InputFields = {
        UserName: this.page.locator("//input[@name='user-name']"),
        Password: this.page.locator("//input[@name='password']"),
    };

    Buttons = {
        Login: this.page.locator("//input[@name='login-button']"),
    };

    async logIn(userName,password){
        await this.InputFields.UserName.fill(userName);
        await this.InputFields.Password.fill(password);
        await this.Buttons.Login.click();
    };
}
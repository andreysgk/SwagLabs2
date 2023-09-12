import { BasePage } from './BasePage';

export class CheckoutYourInformationPage extends BasePage{
    Locators = {
        TitleYourInformation: this.page.locator('"Checkout: Your Information"'),
        ErrorContainer: this.page.locator('error-message-container error'),
    };

    InputFields = {
        FirstName: this.page.locator("//input[@id='first-name']"),
        LastName: this.page.locator("//input[@id='last-name']"),
        ZipPostalCode: this.page.locator("//input[@id='postal-code']"),
    };

    Buttons = {
        Continue: this.page.locator("//input[@id='continue']"),
    };

    async checkoutInfo(firstName, lastName, zipPostalCode){
        await this.InputFields.FirstName.fill(firstName);
        await this.InputFields.LastName.fill(lastName);
        await this.InputFields.ZipPostalCode.fill(zipPostalCode)
    };
}
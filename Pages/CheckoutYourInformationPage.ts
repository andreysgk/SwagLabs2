import { BasePage } from './BasePage';

export class CheckoutYourInformationPage extends BasePage{
    Locators = {
        Title: this.page.locator(this.MainLocators.Title),
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

    async fillYourInformation(firstName, lastName, zipPostalCode){
        await this.InputFields.FirstName.type(firstName, { delay: 200 });
        await this.InputFields.LastName.type(lastName, { delay: 200 });
        await this.InputFields.ZipPostalCode.type(zipPostalCode, { delay: 200 });
    };
}
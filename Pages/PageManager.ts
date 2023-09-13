import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { CartPage } from "./CartPage";
import { ProductsPage } from "./ProductsPage";
import { CheckoutYourInformationPage } from "./CheckoutYourInformationPage";
import { CheckoutOverviewPage } from "./CheckoutOverviewPage";
import { CheckoutCompletePage } from "./CheckoutCompletePage";

export class PageManager{
    page: Page;
    loginPage: LoginPage;
    cartPage: CartPage;
    productsPage: ProductsPage;
    checkoutYourInformationPage: CheckoutYourInformationPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutCompletePage: CheckoutCompletePage;

    constructor(page: Page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.cartPage = new CartPage(page);
        this.productsPage = new ProductsPage(page);
        this.checkoutYourInformationPage = new CheckoutYourInformationPage(page);
        this.checkoutOverviewPage = new CheckoutOverviewPage(page);
        this.checkoutCompletePage = new CheckoutCompletePage(page);
    }
}
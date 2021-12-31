import type { Page } from  '@playwright/test';
import loginLocators from '../../locators/loginLocators';


export class LoginFlows{

    readonly page: Page
    constructor(page:Page){
        this.page=page;
    }

    async submitLoginFlows(username, password){

        await this.page.type(loginLocators.tfUsername, username)
        await this.page.click(loginLocators.btLogin)
        await this.page.type(loginLocators.tfPassword, password)
        await this.page.click(loginLocators.btLogin)
     }
}

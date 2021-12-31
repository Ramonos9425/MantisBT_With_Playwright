import type { Page } from  '@playwright/test';
import InitialScreenLocators from '../locators/initialScreenLocators'

export class InitialScreenPages{

    readonly page: Page
    constructor(page:Page){
        this.page=page;
    }

    async selectManager(){
        await this.page.click(InitialScreenLocators.btmanage)
    }
}
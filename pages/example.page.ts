import type { Page } from  '@playwright/test';
export class ExampleClass{

    readonly page: Page
    constructor(page:Page){
        this.page=page
    }// Aqui vai receber a url, ou melhor uma pagina

    async typeSearchText(){
       await this.page.type('input[name="q"]',"Playwright")// aqui usa o contrutor acima, chama a pagina a receber a acao
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }
    async searchResult(){
       return this.page.innerText('//h3[contains(text(),"Playwright:")]')
    }
}
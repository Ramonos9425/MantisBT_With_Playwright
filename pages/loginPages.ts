import type { Page } from  '@playwright/test';
import loginLocators from '../locators/loginLocators';

export class LoginPages{

    readonly page: Page
    constructor(page:Page){
        this.page=page;
    }

    async fillUsername(username){
        await this.page.type(loginLocators.tfUsername, username)// aqui usa o contrutor acima, chama a pagina a receber a acao
     }

     async submitLogin(){
         await this.page.click(loginLocators.btLogin)
     }

     async fillPassword(password){
         await this.page.type(loginLocators.tfPassword, password)
     } 

     async validateMessageError(){
         let message = await this.page.$$('.alert-danger > p')
     }
}
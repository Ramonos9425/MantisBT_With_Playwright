import { test, expect } from '@playwright/test';
import { LoginPages } from '../pages/loginPages';
import LoginFixtures from '../fixtures/loginFixtures';
import LoginLocators from '../locators/loginLocators';
import Config from '../support/config.json';
import loginFixtures from '../fixtures/loginFixtures';

//npx playwright test tests/loginMantisTests.spec.ts --headed
test.describe('Tests Login', ()=> {

  let loginPages = null;

    test.beforeEach(async ({page})=> {
        await page.goto(Config.url);
       // await page.goto();
      })
    
      test.afterEach(async ()=> {
        
      })

      test('Login Sucess', async({ page }) => {

        loginPages = new LoginPages(page);

        await loginPages.fillUsername(loginFixtures.userName);
        await loginPages.submitLogin();
        await loginPages.fillPassword(loginFixtures.password);
        await loginPages.submitLogin();
        //expect(await LoginLocators.messageValidation).toBe(".smaller-75")//Aq pega o locator e nao a mensagem 
        await expect(LoginLocators.messageValidation).not.toBeNull();
        await expect(page.locator(LoginLocators.messageValidation)).toHaveText(LoginFixtures.messageValidationLogin)
      })

      test('Login without information', async({page}) => {
       
        loginPages = new LoginPages(page);
        
        await loginPages.submitLogin();

        await expect(page.locator(LoginLocators.messageErrorLogin)).toHaveText(LoginFixtures.messageErrorLogin)
      })

      test('Passoword without information', async({page}) => {
        
        loginPages = new LoginPages(page);
        await loginPages.fillUsername(loginFixtures.userName);
        await loginPages.submitLogin();
        await loginPages.submitLogin();

        await expect(page.locator(LoginLocators.messageErrorLogin)).toHaveText(LoginFixtures.messageErrorLogin)
      })

      test('Login wrong', async({page}) => {

        loginPages = new LoginPages(page);

        await loginPages.fillUsername(LoginFixtures.userNameWrong);
        await loginPages.submitLogin();
        await loginPages.fillPassword(LoginFixtures.password);
        await loginPages.submitLogin();

        await expect(page.locator(LoginLocators.messageErrorLogin)).toHaveText(LoginFixtures.messageErrorLogin)
      })

      test('Passwrod wrong', async({page}) => {

        loginPages = new LoginPages(page);

        await loginPages.fillUsername(LoginFixtures.userNameWrong);
        await loginPages.submitLogin();
        await loginPages.fillPassword(LoginFixtures.passwordWrong);
        await loginPages.submitLogin();

        await expect(page.locator(LoginLocators.messageErrorLogin)).toHaveText(LoginFixtures.messageErrorLogin)
      })
})
import { test, expect } from '@playwright/test';
import { ManageProjectPages } from '../pages/manageProjectPages';
import { LoginFlows } from '../support/flows/loginFlows';
import LoginFixtures from '../fixtures/loginFixtures';
import { InitialScreenPages } from '../pages/initialScreenPages';
import ManageProjectLocators from '../locators/manageProjectsLocators';
import Config from '../support/config.json'
//npx playwright test tests/removeSubProjectTests.spec.ts --headed
test.describe('Remove a SubProject', () => {

    let manageProjectPages = null;
    let loginFlows = null;
    let initialScreenPages = null;

    test.beforeEach(async ({page})=> {
        await page.goto(Config.url);
       // await page.goto();
      })
    
      test.afterEach(async ()=> {
        
      })

      test('Remove SubProject Sucess', async({ page }) => {

        loginFlows = new LoginFlows(page);
        initialScreenPages = new InitialScreenPages(page);
        manageProjectPages = new ManageProjectPages(page);

        await loginFlows.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        await initialScreenPages.selectManager()
        await manageProjectPages.selectManageProjects()
        await manageProjectPages.selectCreatedProject()
        await manageProjectPages.selectCreateSubProject()
        await manageProjectPages.selectDeleteProject() //problema para deletar o subprojeto
        await manageProjectPages.selectConfirmDeleteProject()
        await expect(page.locator(ManageProjectLocators.txCreatedSubProject)).toBeHidden()//nao existir o elemento

      })
})
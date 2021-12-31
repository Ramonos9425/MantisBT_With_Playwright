import { test, expect } from '@playwright/test';
import { ManageProjectPages } from '../pages/manageProjectPages';
import { LoginFlows } from '../support/flows/loginFlows';
import LoginFixtures from '../fixtures/loginFixtures';
import { InitialScreenPages } from '../pages/initialScreenPages';
import ManageProjectFixtures from '../fixtures/manageProjectFixtures';
import ManageProjectLocators from '../locators/manageProjectsLocators';
import manageProjectFixtures from '../fixtures/manageProjectFixtures';
import Config from '../support/config.json'

test.describe('Edit a SubProject', () => {

    let manageProjectPages = null;
    let loginFlows = null;
    let initialScreenPages = null;

    test.beforeEach(async ({page})=> {
        await page.goto(Config.url);
       // await page.goto();
      })
    
      test.afterEach(async ()=> {
        
      })

      test('Edit SubProject Sucess', async({ page }) => {

        loginFlows = new LoginFlows(page);
        initialScreenPages = new InitialScreenPages(page);
        manageProjectPages = new ManageProjectPages(page);

        await loginFlows.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        await initialScreenPages.selectManager()
        await manageProjectPages.selectManageProjects()
        await manageProjectPages.selectCreateSubProject()
        await manageProjectPages.fillNameProject(ManageProjectFixtures.nameSubProjectEdit)
        await manageProjectPages.selectState(manageProjectFixtures.stateEdit)
        await manageProjectPages.selectVisibilitie(manageProjectFixtures.visibilitieEdit)
        await manageProjectPages.fillDescription(ManageProjectFixtures.descriptionSubProjectEdit)
        await manageProjectPages.selectAddProject()
        await expect(page.locator(ManageProjectLocators.txCreatedSubProject)).toHaveText(ManageProjectFixtures.nameSubProjectEdit)

      })
})
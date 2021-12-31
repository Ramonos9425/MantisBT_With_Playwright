import { test, expect } from '@playwright/test';
import { ManageProjectPages } from '../pages/manageProjectPages';
import { LoginFlows } from '../support/flows/loginFlows';
import LoginFixtures from '../fixtures/loginFixtures';
import { InitialScreenPages } from '../pages/initialScreenPages';
import ManageProjectFixtures from '../fixtures/manageProjectFixtures';
import ManageProjectLocators from '../locators/manageProjectsLocators';
import Config from '../support/config.json'

test.describe('Edit a Project', () => {

    let manageProjectPages = null;
    let loginFlows = null;
    let initialScreenPages = null;

    test.beforeEach(async ({page})=> {
        await page.goto(Config.url);
       // await page.goto();
      })
    
      test.afterEach(async ()=> {
        
      })

      test('Edit Project Sucess', async({ page }) => {

        loginFlows = new LoginFlows(page);
        initialScreenPages = new InitialScreenPages(page);
        manageProjectPages = new ManageProjectPages(page);

        await loginFlows.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        await initialScreenPages.selectManager()
        await manageProjectPages.selectManageProjects()
        await manageProjectPages.selectCreatedProject()
        await manageProjectPages.fillNameProject(ManageProjectFixtures.nameProjectEdit)
        await manageProjectPages.selectState(ManageProjectFixtures.stateEdit)
        await manageProjectPages.selectVisibilitie(ManageProjectFixtures.visibilitieEdit)
        await manageProjectPages.fillDescription(ManageProjectFixtures.descriptionEdit)
        await manageProjectPages.selectAddProject()
        await expect(page.locator(ManageProjectLocators.txCreatedProject)).toHaveText(ManageProjectFixtures.nameProjectEdit)

      })
})
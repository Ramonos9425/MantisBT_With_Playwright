import { test, expect } from '@playwright/test';
import { ManageProjectPages } from '../pages/manageProjectPages';
import { LoginFlows } from '../support/flows/loginFlows';
import LoginFixtures from '../fixtures/loginFixtures';
import { InitialScreenPages } from '../pages/initialScreenPages';
import ManageProjectFixtures from '../fixtures/manageProjectFixtures';
import ManageProjectLocators from '../locators/manageProjectsLocators';
import Config from '../support/config.json'
//npx playwright test --headed
//npx playwright test tests/createProjectTests.spec.ts --headed
test.describe('Create a Project', () => {

    let manageProjectPages = null;
    let loginFlows = null;
    let initialScreenPages = null;

    test.beforeEach(async ({page})=> {
        await page.goto(Config.url);
       // await page.goto();
      })
    
      test.afterEach(async ()=> {
        
      })

      test('Create Project Sucess', async({ page }) => {

        loginFlows = new LoginFlows(page);
        initialScreenPages = new InitialScreenPages(page);
        manageProjectPages = new ManageProjectPages(page);

        await loginFlows.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        await initialScreenPages.selectManager()
        await manageProjectPages.selectManageProjects()
        await manageProjectPages.selectNewProject()
        await manageProjectPages.fillNameProject(ManageProjectFixtures.nameProject)
        //await page.waitForTimeout(3000)
        await manageProjectPages.selectState(ManageProjectFixtures.state)
        //await manageProjectPages.selectVisibilitie(ManageProjectFixtures.visibilitie)//aparecendo um erro aqui
        //await page.waitForTimeout(3000)
        await manageProjectPages.fillDescription(ManageProjectFixtures.description)
        await manageProjectPages.selectAddProject()
        await manageProjectPages.selectProceed()
        await expect(page.locator(ManageProjectLocators.txCreatedProject)).toHaveText(ManageProjectFixtures.nameProject)//'Project Tests Automation1úblico'

      })
})
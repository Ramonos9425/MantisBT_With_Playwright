import type { Page } from  '@playwright/test';
import manageProjectsLocators from '../locators/manageProjectsLocators';

export class ManageProjectPages{

    readonly page: Page
    constructor(page:Page){
        this.page=page;
    }

    async selectManageProjects(){
        await this.page.click(manageProjectsLocators.btmanageProjects)
    }

    async selectNewProject(){
        await this.page.click(manageProjectsLocators.btCreateNewProject)
    }

    async fillNameProject(nameProject){
        await this.page.type(manageProjectsLocators.txNameProject, nameProject)//arrumar o clear()
    }

    async selectState(state){
        await this.page.type(manageProjectsLocators.cbState, state)
    }

    async selectVisibilitie(visibilitie){
        await this.page.type(manageProjectsLocators.cbVisibilitie, visibilitie)
    }

    async fillDescription(description){
        await this.page.type(manageProjectsLocators.txDescription, description)//arrumar o clear()
    }

    async selectAddProject(){
        await this.page.click(manageProjectsLocators.btAddProject)
    }

    async selectProceed(){
        await this.page.click(manageProjectsLocators.btProceed)
    }

    async selectCreatedProject(){
        await this.page.click(manageProjectsLocators.txCreatedProject)
    }

    async selectDeleteProject(){
        await this.page.click(manageProjectsLocators.btDeleteProject)
    }

    async selectConfirmDeleteProject(){
        await this.page.click(manageProjectsLocators.btConfirmDeleteProject)
    }

    async selectCreatedSubProject(){
        await this.page.click(manageProjectsLocators.txCreatedSubProject)
    }

    async fillNameCategory(nameCategory){
        await this.page.type(manageProjectsLocators.txNameCategory, nameCategory)
    }

    async selectCreateCategory(){
        await this.page.click(manageProjectsLocators.btaddCategory)
    }

    async selectAssignTo(nameAssign){
        await this.page.type(manageProjectsLocators.btaddCategory, nameAssign)
    }

    async selectUpdateCategory(){
        await this.page.click(manageProjectsLocators.btUpdateCategory)
    }

    async selectDeleteCategory(){
        await this.page.click(manageProjectsLocators.btDeleteCategory)
    }

    async selectConfirmDeleteCategory(){
        await this.page.click(manageProjectsLocators.btConfirmDeleteCategory)
    }

}
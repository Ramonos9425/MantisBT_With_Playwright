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

    async selectCreateSubProject(){
        await this.page.click(manageProjectsLocators.btCreateSubproject)
    }

    async selectCreatedSubProject(){
        await this.page.click(manageProjectsLocators.txCreatedSubProject)
    }

    async fillNewCategory(category){
        await this.page.type(manageProjectsLocators.txNewCategory, category)
    }

    async fillNameCategory(nameCategory){
        await this.page.type(manageProjectsLocators.txNameCategory, nameCategory) //Adicionar um clear()
    }

    async selectCreateCategory(){
        await this.page.click(manageProjectsLocators.btaddCategory)
    }

    async selectAssignTo(nameAssign){
        await this.page.type(manageProjectsLocators.cbAssignTo, nameAssign)
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

    async fillVersion(nameVersion){
        await this.page.type(manageProjectsLocators.txNameVersion, nameVersion)
    }

    async selectAddVersion(){
        await this.page.click(manageProjectsLocators.btAddVerion)
    }

    async selectEditVersion(){
        await this.page.click(manageProjectsLocators.btEditVersion)
    }

    async fillEditVersion(nameVersion){
        await this.page.type(manageProjectsLocators.txNameEditVersion, nameVersion) //Precisa colocar o clear()
    }

    async fillDescriptionVersion(descriptionVersion){
        await this.page.type(manageProjectsLocators.txDescriptionVersion, descriptionVersion) //Precisa colocar o clear()
    }

    async selectReleasedVersion(){
        await this.page.click(manageProjectsLocators.sbReleased)
    }

    async selectUpdateVersion(){
        await this.page.click(manageProjectsLocators.btUpdateVersion)
    }

    async selectDeleteVersion(){
        await this.page.click(manageProjectsLocators.btDeleteVersion)
    }

    async selectConfirmDeleteVersion(){
        await this.page.click(manageProjectsLocators.btConfirmDeleteVersion)
    }
}
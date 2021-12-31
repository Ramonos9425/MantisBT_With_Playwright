# Introdution
This project have the goal to automation the application Mantis Bug Tracker with the tool Plyawright with TypeScript, when was testaded some tests cases referes the application, with test patterns.

# Installing the application Mantis with Windows

- Make download the tool xampp: https://www.apachefriends.org/download.html and install
- Make download the MantisBT: https://www.mantisbt.org/download.php, I used the version: 2.25.2
- Copy the unzipped mantis folder into the htdocs folder in xampp: C:\xampp\htdocs and leave the mantis folder with just the name mantis
- The, open the xampp and start the Apache and MySQL
- Open the browser and type: localhost/mantis

## Clone Project
`https://github.com/Ramonos9425/MantisBT_With_Playwright.git`
## Installing the Playwright first time (only in the first time)

https://playwright.dev/docs/intro#installation

`npm install --save-dev playwright`

## Prepare the dependencies
install all dependencies from the root directory

`npm install`

## Opening Playwright
to open the cypress and run tests

`npx playwright test --headed` 

# Tests Cases

## Login
- Login Sucess
- Login Without Information
- Password Without Information
- Login Wrong
- Password Wrong


## Project
- Create Project
- Edit Project
- Delete Project
- Create Project Without Name

## SubProject
- Create SubProject
- Edit SubProject
- Delete SubProject
- Create SubProject Without Name

## Category
- Create Category
- Edit Category
- Delete Category
- Create the same Category

## Version
- Create Version
- Edit Version
- Delete Version
- Create the same Version
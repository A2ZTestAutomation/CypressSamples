import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
// import HomePage from './homePage'
// import LoginPage from './loginPage'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'

Given('User is on Login Page' , () => {
    // cy.visit('http://zero.webappsecurity.com/')
    // cy.get('#signin_button').click()

    //Using PageObject
    HomePage.visitURL()
    HomePage.navigateToLogin()
    
})
When('User enter {string} and {string}', (strUser, strPwd) => {
    // cy.get('#user_login').type(strUser)
    // cy.get('#user_password').type(strPwd)
    // cy.get('input.btn.btn-primary').click()

    //Using PageObject
    LoginPage.login(strUser, strPwd)
})

Then('Should display Home Page', () => {
    // cy.url().should('include', 'account-summary.html')

})
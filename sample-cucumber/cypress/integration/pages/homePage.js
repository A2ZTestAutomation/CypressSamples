const URL = 'http://zero.webappsecurity.com/'
const SIGNBTN = '#signin_button'

class HomePage{
    static visitURL(){
        cy.visit(URL)
    }
    static navigateToLogin(){
        cy.get(SIGNBTN).click()
    }
}

export default HomePage
const USER_INPUT = '#user_login'
const USER_PWD = '#user_password'
const LOGIN_BTN = 'input.btn.btn-primary'

class LoginPage{
    static login(strUser, strPwd){
        cy.get(USER_INPUT).type(strUser)
        cy.get(USER_PWD).type(strPwd)
        cy.get(LOGIN_BTN).click()
        
    }
}

export default LoginPage
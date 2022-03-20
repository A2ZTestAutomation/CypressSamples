/// <reference types='cypress' />

describe('Visual Testing', () =>{
    it('Verifying element', () => {
        cy.visit('http://example.com/')
        cy.matchImageSnapshot()
        
        // cy.viewport(1200, 700)
         cy.matchImageSnapshot()
    })
})
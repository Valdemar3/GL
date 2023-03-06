///<reference types="cypress"/> 

describe('Location', () => {
    it('Implicit Assertions', () => {
      cy.visit('http://localhost:8080/commands/assertions');
      
      cy.location().should( location  => {
        expect(location.href).to.eq('http://localhost:8080/commands/assertions')
        expect(location.host).to.eq('localhost:8080')
        expect(location.hostname).to.eq('localhost')
        expect(location.hash).to.be.empty
        expect(location.origin).to.eq('http://localhost:8080')
        expect(location.pathname).to.eq('/commands/assertions')
        expect(location.port).to.eq('8080')
        expect(location.protocol).to.eq('http:')
        //expect(location.search).to.eq('id=123') find query parameters in URL
        //expect(location.search).to.contain('id=123$123') find query parameters in URL

    })
    
    cy.url().should('eq', 'http://localhost:8080/commands/assertions')
})
})
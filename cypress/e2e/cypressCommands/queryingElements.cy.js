///<reference types="cypress"/> 

describe('Test Suite for querying Elements', () => {
  it('Querying Elements', () => {
    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#query-btn')
    .should('contain', 'Button')

    cy.get('li:contains("bananas")')
    .should('contain', 'bananas')
    
    cy.contains('bananas')
    .should('contain', 'bananas')

    cy.contains('li.third', 'bananas')
    .should('contain', 'bananas')

    cy.get('#querying')
    .contains('bananas')
    .should('have.class', 'third')

    cy.get('.query-form')
    .within( () => {
      cy.get('#inputEmail')
      .should('have.attr', 'placeholder', 'Email')
      cy.get('#inputPassword')
      .should('have.attr', 'placeholder', 'Password')
      //cy.get('inputName') //coudn't be executed beacouse elem #inputName is out of border Within
    })

    cy.root().should('contain', 'bananas')

    cy.get('div.col-xs-5 form')
    .within( () => {
      cy.root()
      .should('have.class', 'query-form')
    })

  })
})
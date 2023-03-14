///<reference types="cypress"/> 

describe('Test Suite for querying Elements', () => {
  it.skip('Querying Elements', () => {
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
  it('additional comands for searching elements', () => {
    cy.visit('http://localhost:8080/commands/traversal')
    // cy.get('.well')
    // .first()
    // .find('li')
    // .eq(0)
    // .should('contain', 'Home')

    cy.get('.traversal-breadcrumb')
      .children('li')
      .eq(0)
      .should('contain', 'Home')

    cy.get('.traversal-breadcrumb.breadcrumb')
      .children('.active')
    //.eq(0) //have no idea why Dima wrote this line
      .should('contain', 'Data')

    cy.get('.traversal-badge')
      .closest('ul')
      .should('have.class', 'list-group')

    cy.contains('John')
      .closest('table')
      .should('have.class', 'traversal-table')
      .and('contain', 'Doe')

    cy.get('.traversal-table td')
      .first()
      .should('contain', '1')

      cy.get('.traversal-table td')
      .last()
      .should('contain', 'Doe')

      cy.contains('tbody', 'lane', {matchCase: false})

      cy.get('.traversal-disabled button')
      .first()
      .should('have.attr', 'disabled')
      .and('eq', 'disabled')

      cy.get('.traversal-ul')
        .contains('apples')
        .next()
        .should('contain', 'oranges')
        .next()
        .contains('bananas') //or should('contain','bananas')

        cy.get('.traversal-table td')
        .first()
        .should('contain', '1')
        .next()
        .should('contain', 'Jane')
        .next()
        .should('contain', 'Lane')

        cy.get('.traversal-next-all')
        .contains('bananas')
        .nextAll()
        .click({ multiple: true })
        .should('have.length', '2')

        cy.get('#veggies')
          .nextUntil('#nuts')
          .click({ multiple: true })
          .should('have.length', '3')
          .and('contain', 'corn')
          .and('contain', 'carrots')
          .and('contain', 'cucumbers')

        cy.get('.traversal-disabled .btn.btn-default')
          .not('[disabled]')
          .should('not.be.hidden')
          .should('be.enabled')

        cy.get('.traversal-mark')
          .parent()
          .should('contain.text', 'Morbi')

        cy.contains('.active', 'About')
          .parent()
          .should('contain.text', 'Services')

        cy.get('.traversal-cite')
          .parents()
          .should('contain.text', 'Lorem')
          
        cy.get('.traversal-cite')
          .parents('blockquote')
          .should('contain.text', 'Title')

        cy.get('.pagination.traversal-pagination')
          .find('span')
          .last()
          .should('contain', '»')

        cy.get('.pagination.traversal-pagination')
          .find('span')
          .eq(1)
          .should('contain', '»')

        cy.get('.foods-list')
          .find('#veggies')
          .should('contain', 'Vegetables')
      })
})
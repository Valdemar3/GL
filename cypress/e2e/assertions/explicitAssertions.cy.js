///<reference types="cypress"/> 

describe('template spec', () => {
  it('Explicit Assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.class', 'success')

    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.attr', 'class')

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('have.text', 'Column content')
    
    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('contain', 'Column content')

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('have.html', 'Column content')

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('include.text', ' content')

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('include.text', '')

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('not.contain', 'Hello')

    cy.get('.table.table-bordered.assertion-table tr th')
    .eq(5)
    .should('contain', '3')

    cy.get('.table.table-bordered.assertion-table tr th')
    .eq(5)
    .invoke('text') //get any properties of elemt
    .then(parseFloat)
    .should('be.greaterThan', 2)
  })
})

describe ('Commands querying',() => {
  it('Queying', () => {
    cy.visit('http://localhost:8080/commands/querying')
    cy.get('#inputName')
    .type('Hello')
    cy.get('#inputName')
    .should('have.value', 'Hello')
    //cy.get('#inputName')
    //.should('have.text', 'Hello') vill not work as our Text "Hello" is in Properties > Value
    cy.get('#query-btn')
    .should('be.enabled')
  })

  it('Traversal', () => {
    cy.visit('http://localhost:8080/commands/traversal')
    cy.get('.traversal-disabled .btn.btn-default')
    .eq(0)
    .should('be.disabled')
  })
})

describe('Cheking styles', () => {
  it('Assertioncs', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table th')
    .eq(5)
    .should('have.css', 'background-color')
    .and('eq', 'rgb(223, 240, 216)')

    cy.get('.navbar-brand') //find the web elem
    .should('have.class', 'navbar-brand') // find calss with value, returned ELEMENT
    .and('be.visible') //returned ELEMENT
    .and('have.attr', 'href') //find attribute, reterned value of attribute
    .and('include', '/') // take this attribute and find in them value

    cy.get('.dropdown-menu li')
    .should('have.length', 17);
    
    // cy.get('.dropdown-menu li')
    // .should('have.css', 'childElementCount')
    //childElementCount

  })
})
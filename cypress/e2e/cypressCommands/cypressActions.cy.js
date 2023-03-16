///<reference types="cypress"/> 

import * as errorMessage from '../../fixtures/example.json' // errorMessage - name of the value, using it you call this file in code

describe('Test Suite for Actions Elements', () => {
  it('Actions Elements', () => {
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1')
      .type('fuck@off.com')
      .should('have.value', 'fuck@off.com')
      .clear()
      .type('1{leftArrow}2{leftArrow}3{rightArrow}{rightArrow}{rightArrow}4', /*{delay: 500}*/)
      .type('{selectall}{backspace}')
      .should('have.value', '')

    cy.get('.form-control.action-disabled')
      .type('disabled text', {force: true})
  
    
    cy.get('#password1')
      .focus()
      .should('have.class', 'focus')
      .prev()
      .should('have.attr', 'style', 'color: orange;')

    cy.get('#fullName1')
      .focus()
      .should('not.have.class', 'error')
      .blur()
      .should('have.class', 'error')
      .prev()
      .should('have.attr', 'style', 'color: red;')

    cy.get('#couponCode1')
      .type('kakakkaka')
      .parents('form')
     //.closet('form')
      .submit() 
      .siblings()
      .should('contain.text', 'form')

    cy.get('#couponCode1')
      .type('kakakkaka')
      .parents('form')
     //.closet('form')
      .submit() 
      .next()
      .should('contain.text', 'form')  

    cy.get('#action-canvas')
      .click('topLeft')
      .click('top')
      .click('topRight')
      .click('left')
      .click('bottom')
      .click('bottomRight')
      .click(10,10)

    cy.get('.btn.btn-lg.btn-primary')
      .click({force:true})

    cy.get('.action-div')
      .dblclick()
      .next()
      .should('not.have.class', 'hidden')
      .clear()
      .type(errorMessage.email)

    cy.get('.label.label-primary')
      .click({multiple:true})

    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check({multiple:true})

    cy.get('.action-radios .radio input')
      .check({force:true})

    cy.get('.well .form-control.action-select')
      .select('fr-oranges')
      .should('have.value', 'fr-oranges')
    
    cy.get('#scroll-horizontal button')
      .should('not.be.visible')
      .scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-both button')
      .should('not.be.visible')
      .scrollIntoView()
      .should('be.visible')

    cy.get('#scrollable-horizontal')
      .scrollTo('right')

    cy.get('.trigger-input-range')
      .invoke('val', 10)
      .trigger('change')
      .next()
      .should('have.text', 10)

    cy.get('.trigger-input-range')
      .click()

      cy.get('.trigger-input-range')
      .invoke('val', 10) //invite properties of elements. with invoke can be gotten styles, properties
      .trigger('blur')
      .next()
      .should('have.text', 10)

    })
})
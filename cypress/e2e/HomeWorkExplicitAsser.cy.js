// describe ('Test suite for Toastr Manual', () => {
//     beforeEach( () => {
//         cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
//         cy.get('[alt="Material Dark Theme"]').click()
//         cy.get('.menu-title.ng-tns-c141-23').click({force:true})
//     })

//     it ('Positioning', () => {
//         cy.get('div.form-group:contains("Position") nb-select').click()
//         cy.get('[ng-reflect-value="top-left"]').click()
//         cy.get('div.form-group:contains("Position") nb-select')
//             .should('have.attr', 'ng-reflect-selected', 'top-left')
//     })

//     it ('Title, Content, Time', () => {
//         cy.get('[ng-reflect-model="HI there!"]').clear().type('Asshole is here')
//         cy.get('[ng-reflect-model="Asshole is here"]').should('have.value','Asshole is here')
//         cy.get(`[ng-reflect-model="I'm cool toaster!"]`).clear().type('AnyTosters!')
//         cy.get('[ng-reflect-model="2000"]').clear().type('2001')
//         cy.get('[ng-reflect-model="2001"]').should('have.value', '2001')
//     })

//     it ('Toast type', () => {
//         cy.get('div.form-group:contains("Toast type:") nb-select').click()
//         cy.get('[ng-reflect-value="info"]').click()
//         cy.get('div.form-group:contains("Toast type:") nb-select')
//           .should('have.attr', 'ng-reflect-selected', 'info')
//     })
    
//     // it.only('Checkboxes', () => {

//     // })

//     it('Show Toast Button', () => {
//         cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic').click()
//     })
// })
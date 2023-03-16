describe ('Test suite Autom', () => {

    const inData = [
    {position: 'top-left',            expPosition: 'top-left',
    title: 'Asshole!',               expTitle: 'Asshole!',
    content: 'Fucking content',      expContent: 'Fucking content',
    time: '10000',                   expTime: '2000000',
    toastrType: 'info',              expToastrType: 'info',
                                     expIconImage: 'question-mark',
                                    expColor: 'rgb(4, 149, 238)',
                                    expPositionOnScreen: {
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start'
                                    }
    }]
  

    before('Visit link befor All', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[alt="Material Dark Theme"]').click()
        cy.get('.menu-title.ng-tns-c141-23').click({force:true})
    })

        inData.forEach( ({position, expPosition,
                            title, expTitle,
                            content, expContent,
                            time, expTime,
                            toastrType, expToastrType,
                            expIconImage, expColor,
                            expPositionOnScreen, }) => {
                                it('Step to reproduce', () => {
                                    cy.get('.mat-ripple.position-select',{timeout: 15000}).click({force:true});
                                    cy.get(`[ng-reflect-value=${position}]`).click();
                                    cy.get('[ng-reflect-model="HI there!"]')
                                        .clear()
                                        .type(`${title}`)
                                    cy.get(`[ng-reflect-model="I'm cool toaster!"]`)
                                        .clear()
                                        .type(`${content}`)
                                    cy.get('[ng-reflect-model="2000"]')
                                        .clear()
                                        .type(`${time}`)
                                    cy.get("div.form-group:contains('Toast type:') nb-select").click()
                                    cy.get('[ng-reflect-value="info"]').click()
                                    cy.get('button:contains("Show ")').click()
                                    //Checking with cy.wrap()
                                    cy.get(`.status-${toastrType}`).then( toastr =>{
                                        cy.wrap(toastr).should('contain', expTitle)
                                            .and('contain', expContent)
                                            .and('have.css', 'background-color')
                                            .and('eq', expColor)
                                        cy.wrap(toastr).find(`g[data-name=${expIconImage}]`).should('exist')
                                        cy.wrap(toastr).parents('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expPositionOnScreen.justifyContent)
                                        cy.wrap(toastr).parents('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expPositionOnScreen.alignItems)
                                
                                            })
                                })
        })
            
})


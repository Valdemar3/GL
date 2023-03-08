describe ('Test suite Autom', () => {

    const inData = [
    {position: 'top-left',            expPosition: 'top-left',
    title: 'Asshole!',               expTitle: 'Asshole!',
    content: 'Fucking content',      expContent: 'Fucking content',
    time: '10000',                   expTime: '10000',
    toastrType: 'info',              expToastrType: 'info'},
    ];

    before('Visit link befor All', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[alt="Material Dark Theme"]').click()
        cy.get('.menu-title.ng-tns-c141-23').click({force:true})
    })

        inData.forEach( ({position, expPosition,
                            title, expTitle,
                            content, expContent,
                            time, expTime,
                            toastrType, expToastrType}) => {
            it(`Choosing Position of Toast ${position}`, () => {
                    cy.get(`div.form-group:contains("Position:") nb-select`).click()
                    cy.get(`ul nb-option[ng-reflect-value=${position}]`).click()
                    cy.get('div.form-group:contains("Position:") nb-select')
                        .then(topLeft => {
                            expect(topLeft).to.have.attr('ng-reflect-selected')
                            expect(topLeft.attr('ng-reflect-selected')).to.eq(`${expPosition}`)
                        })
                    //--work with Title
                    cy.get('div.form-group:contains("Title:") input').clear()
                    cy.get('div.form-group:contains("Title:") input')
                        .then(inputTitle => {
                            expect(inputTitle).to.be.empty
                        })
                    cy.get('div.form-group:contains("Title:") input').type(`${title}`)
                    cy.get('div.form-group:contains("Title:") input')
                        .then(inputedTitle => {
                            expect(inputedTitle).to.have.attr('ng-reflect-model')
                            expect(inputedTitle.attr('ng-reflect-model')).to.eq(`${expTitle}`)
                        })
                    //--work with Content
                    cy.get('div.form-group:contains("Content:") input').clear()
                    cy.get('div.form-group:contains("Content:") input').type(`${content}`)
                    cy.get('div.form-group:contains("Content:") input')
                        .then(inputedTitle => {
                            expect(inputedTitle).to.have.attr('ng-reflect-model')
                            expect(inputedTitle.attr('ng-reflect-model')).to.eq(`${expContent}`)
                        })
                    //work with Time
                    cy.get('div.form-group:contains("Time ") input').clear()
                    cy.get('div.form-group:contains("Time ") input').type(`${time}`)
                    cy.get('div.form-group:contains("Time ") input')
                        .then(inputedTitle => {
                            expect(inputedTitle).to.have.attr('ng-reflect-model')
                            expect(inputedTitle.attr('ng-reflect-model')).to.eq(`${expTime}`)
                        })
                    //work with Toast type
                    cy.get('div.form-group:contains("Toast ") nb-select').click()
                    cy.get('[ng-reflect-value="info"]').click()
                    cy.get('div.form-group:contains("Toast ") nb-select')
                        .then(infoType => {
                            expect(infoType).to.have.attr('ng-reflect-selected')
                            expect(infoType.attr('ng-reflect-selected')).to.eq(`${expToastrType}`)
                        })
                    
            })


        })
})

// expect(element).to.have.attr('class')
//     expect(element.attr('class')).to.eq('success')


// describe ('Second option', ()=> {
//     const data2 = [
//         { testData2: 1, expectedResult2: 1},
//         { testData2: 2, expectedResult2: 2},
//         { testData2: 3, expectedResult2: 3},
//         { testData2: 'Cypress', expectedResult2: 'Cypress'}
//       ]
    
//       data2.forEach(({testData2, expectedResult2}) => {
//         it(`search data ${testData2}`, () => {
//           cy.visit('https://google.com')
//           cy.get('input.gLFyf').type(`${testData2} qweqwe`)
//           cy.get('input.gLFyf').should('contain.value', `${expectedResult2} qweqwe`)
//         })
//       })
//     })
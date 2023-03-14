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
                                    
    },
    //{same inputs with diferent datas }
    //alert-triangle - wanring
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
                            toastrType, expToastrType,
                            expIconImage, expColor,
                            expPositionOnScreen, }
                            ) => {
            it(`Choosing Position of Toast ${position}`, () => {
                    cy.get(`div.form-group:contains("Position:") nb-select`).click()
                    cy.get(`ul nb-option[ng-reflect-value=${position}]`).click()
                    cy.get('div.form-group:contains("Position:") nb-select')
                        .then(pozA => {
                            expect(pozA).to.have.attr('ng-reflect-selected')
                            expect(pozA.attr('ng-reflect-selected')).to.eq(`${expPosition}`)
                        })
                    //--work with Title
                    cy.get('div.form-group:contains("Title:") input').clear()
                    cy.get('div.form-group:contains("Title:") input')
                        .then(inputedTitle => {
                            expect(inputedTitle).to.be.empty
                        })
                    cy.get('div.form-group:contains("Title:") input').type(`${title}`)
                    cy.get('div.form-group:contains("Title:") input')
                        .then(inputedTitle => {
                            expect(inputedTitle).to.have.attr('ng-reflect-model')
                            expect(inputedTitle.attr('ng-reflect-model')).to.eq(`${expTitle}`)
                            //finding text, after REusing in bottom
                            // expect(inputedTitle).to.have.text(`${expTitle}`)
                            // expect(inputedTitle.text()).to.include(`${expTitle}`)
                            // expect(inputedTitle.text()).to.contain(`${expTitle}`)
                        })
                    //--work with Content
                    cy.get('div.form-group:contains("Content:") input').clear()
                    cy.get('div.form-group:contains("Content:") input').type(`${content}`)
                    cy.get('div.form-group:contains("Content:") input')
                        .then(inputedContent => {
                            expect(inputedContent).to.have.attr('ng-reflect-model')
                            expect(inputedContent.attr('ng-reflect-model')).to.eq(`${expContent}`)
                        })
                    //work with Time
                    cy.get('div.form-group:contains("Time ") input').clear()
                    cy.get('div.form-group:contains("Time ") input').type(`${time}`)
                    cy.get('div.form-group:contains("Time ") input')
                        .then(inputedTime => {
                            expect(inputedTime).to.have.attr('ng-reflect-model')
                            expect(inputedTime.attr('ng-reflect-model')).to.eq(`${expTime}`)
                        })
                    //work with Toast type
                    cy.get('div.form-group:contains("Toast ") nb-select').click()
                    //console.log(`${toastrType}`)
                    cy.get(`[ng-reflect-value=${toastrType}]`).click()
                    cy.get('div.form-group:contains("Toast ") nb-select')
                        .then(toastrType => {
                            expect(toastrType).to.have.attr('ng-reflect-selected')
                            expect(toastrType.attr('ng-reflect-selected')).to.eq(`${expToastrType}`)
                        })
                    //Click on the Show Toastr Button
                    cy.get('button:contains("Show toast")').click()
                    
                    //Checking Toastr--------------------------------
                    cy.get(`.cdk-overlay-pane .status-${expToastrType}`)
                        .then(toasrtElem => {
                            expect(toasrtElem).to.contain(`${expContent}`) //checking Content
                            expect(toasrtElem).to.contain(`${expTitle}`)
                            expect(toasrtElem).to.have.css('background')
                            expect(toasrtElem.css('background')).to.include(`${expColor}`)
                            expect(toasrtElem).to.have.css('background-color')
                            expect(toasrtElem.css('background-color')).to.eq(`${expColor}`)
                        //Same as Above with cy.wrap(toasrtElem)
                            // expect(toasrtElem).to.have.attr('data-name')
                            // expect(toasrtElem.attr('data-name')).to.eq(`${expIconImage}`)
                        })
                        //Cheking Content
                    cy.get(`div.message:contains(${expContent})`)
                        //Checking Title
                    cy.get(`span.title.subtitle:contains(${expTitle})`)
                        //Cheiking Icon Image
                    cy.get('.ng-tns-c209-54 .icon-container g g')
                        .should('have.attr', 'data-name', `${expIconImage}`)
                        //Checking Color rgb(4, 149, 238) \\doen't work.returned rgb(4, 149, 238) +sometext
                    cy.get('.ng-tns-c209-54 .ng-tns-c209-54')
                        .should('have.css', 'background')
                        //Checking Position on the scree
                    cy.get(`.toastr-overlay-container`)
                        .should('have.css', 'justify-content')
                        .and('eq', expPositionOnScreen.justifyContent) //why have.valu doesn't work??
                    
                    
                    
            })
            //working same as Abobe with cy.get only
            // Typing and pressing all I shoud do
            it.only(`TestInf ${position}, and ${toastrType}`, () => {
                cy.get('.mat-ripple.position-select').click({force:true});
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
                //Checking what I got
                cy.get(`.status-${toastrType}`)
                    .should('be.visible')
                    .and('contain.text', `${expTitle}`)
                    .and('contain.text', `${expContent}`)
                    .and('have.css', 'background-color', `${expColor}`)
                cy.get(`[data-name=${expIconImage}]`)
                    .should('exist')
                cy.get('div.toastr-overlay-container')
                    .should('have.attr', 'style', `justify-content: ${expPositionOnScreen.justifyContent}; align-items: ${expPositionOnScreen.alignItems};`)
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
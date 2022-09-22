

describe('Suite selec', () => {

    before(function () {
        cy.visit('/apps/select2/index.html')
    })


    it('deve selecionar uma única opção', () => {
        cy.get('.select2-selection--single').click()
        cy.contains('.select2-results__option', 'Cypress').click()
    })


    it('deve selecionar multiplas opções', () => {

        const frameworks = [
            'Cypress',
            'Robot Framework',
            'Protractor'

        ]

        frameworks.forEach(function (framework) {
            cy.get('.select2-selection--multiple').click()
            cy.contains('.select2-results__option', framework).click()

        })
    })
})

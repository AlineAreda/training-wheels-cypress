
describe('Suite selec', () => {

    before(() => {
        cy.visit('/select')

    })

    it('selecionar bucky por id', () => {
        cy.get('#avengerList')
            .select('Bucky')
            .should('have.value', '2')
    })

    it('selecionar tony stark sem ser pelo id', () => {
        cy.contains('option', 'Selecione um personagem')
            .parent()
            .select('Tony Stark')
            .should('have.value', '3')
    })

})


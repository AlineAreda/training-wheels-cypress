

describe('Suite de testes', () => {

    before(function () {
        cy.log('Aqui temos algo que roda antes de todos os testes')
    })

    beforeEach(function () {
        cy.log('Aqui temos algo que roda antes de cada teste')
    })


    it('teste 1', function () {

        cy.log('testando o teste 1')
    })

    it('teste 2', function () {

        cy.log('testando o teste 2')
    })

    it('teste 3', function () {

        cy.log('testando o teste 3')
    })

    afterEach(function(){
        cy.log('Aqui temos algo que roda depois de cada testes')

    })

    after(function(){
        cy.log('Aqui temos algo que roda depois de todos os testes')

    })

})


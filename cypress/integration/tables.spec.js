

it('deve exibir 7 séries no total', () => {
    cy.visit('/tables')

    cy.get('table tbody tr')
        .then(function (series) {
            expect(series).to.have.length(7)

        })
})

it('deve exibir a série loki', () => {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Loki')
        .then(function (item) {
            expect(item).to.contain('Marvel')
            expect(item).to.contain('Disney+')
            expect(item).to.contain('2021')
        })

})

it('deve exibir a série The Witcher', () => {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'the witcher')
        .then(function (item) {
            expect(item).to.contain('Netflix')
            expect(item).to.contain('Netflix')
            expect(item).to.contain('2019')
        })

})


it('deve remover a série round 6', () => {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Round 6')
        .then(function (item) {
            item.find('.delete').trigger('click')
        })
        .should('not.exist')

    cy.get('table tbody tr')
        .then(function (series) {
            expect(series).to.have.length(6)

        })

})




it('deve exibir mensagem de sucesso no popup', () => {
    cy.visit('/sweet_alert')

    cy.contains('button', 'Sucesso').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão verde.')

})

it('deve exibir mensagem deu ruim no popup', () => {
    cy.visit('/sweet_alert')

    cy.contains('button', 'Deu Ruim').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão vermelho.')

})


it('deve fazer o upload da imagem', () => {
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/teste-de-software.jpg'

    cy.get('input[name=file]')
        .selectFile(imageFile, {force:true})

    cy.get('input[type=submit]')
        .click();

    cy.get('img[src="/uploads/teste-de-software.jpg"]', { timeout: 10000 })
        .should('be.visible')

})



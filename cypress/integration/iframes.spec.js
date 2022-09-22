

const niceIFrame = () => {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);

}

const badIFrame = () => {
    return cy
        .get('iframe[src*=instagram]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
}



it('deve validar username no iFrame bom', () => {

    cy.visit('/nice_iframe');

    niceIFrame()
        .contains('span.UsernameText', 'qacademy_oficial')
        .should('be.visible');

});

it('deve validar username no iFrame ruim', () => {

    cy.visit('/bad_iframe');

    badIFrame()
        .contains('span.UsernameText', 'qacademy_oficial')
        .should('be.visible');

});
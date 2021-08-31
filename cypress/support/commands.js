Cypress.Commands.add('init_browser', () => { 
    cy.viewport(1280, 768)
    cy.visit('https://www.vr.com.br')
    cy.get('header.vr-header').should('be.visible')
})
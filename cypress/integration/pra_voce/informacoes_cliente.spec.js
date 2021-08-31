describe('Pra Você - Informações para o cliente', () => {
  beforeEach(() => {
    cy.init_browser()
    cy.get('li.lum-first').should('be.visible').click()
  })

  it('Exibe mapa para verificar onde o cartão VR é aceito', () => {
    cy.get('a.vr-main-navigation__link')
      .should('be.visible')
      .then(items => {
        items[2].click()
      }
    )

    cy.get('a[class*="vr-button--negative"][href="#rede-credenciada"]')
      .should('be.visible')
      .click()
    
    // Executando os testes com Firefox em modo headless, a classe 'mfp-hide'
    //  é adicionada ao elemento, deixando o mesmo nao-visivel na tela.
    if(Cypress.browser.family === 'firefox' && Cypress.browser.isHeadless) {
      cy.get('div#rede-credenciada')
        .should('have.class', 'mfp-hide')
    } else {
      cy.get('div#rede-credenciada')
      .should('be.visible')
    }

  })
})

describe('Pruebas Neflix', () => {
  
  before('Navegar al sitio Netflix',()=>{
    cy.sitioWeb()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Validar titulo, imprimir url y titulo  ', () => {
    cy.fixture("dataNeflix").then((data)=>{
      cy.validaTituloSitio(data.titulo)
      cy.validaURL(data.url)
      cy.screenshot()
    })    
  })

})
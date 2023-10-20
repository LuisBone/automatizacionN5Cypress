// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('sitioWeb', () => { 
    cy.visit('/')
})
Cypress.Commands.add('validaTituloSitio', (titulo) => { 
    cy.title().should('eq', titulo)
})
Cypress.Commands.add('validaURL', (url) => { 
    cy.url().should('include',url)
})

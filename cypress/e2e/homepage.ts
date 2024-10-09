import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit homepage {string}', (path: string) => {
  cy.visit(path)
})

When('When I visit section standard {string}', (path: string) => {
  cy.visit(path)
})

Then('I should see hero title {string}', (text: string) => {
  cy.get('body').contains(text)
})

Then('I should see testimony title {string}', (text: string) => {
  cy.get('body').contains(text)
})

Then('I should see button {string} and have link to {string}', (s: string, s2: string) => {
  cy.get('body').contains(s)
  cy.get('#hero-cta-button').should('exist').and('have.attr', 'href', s2)
})

Then('I should see product information', (dataTable: DataTable) => {
  dataTable.hashes().forEach((row: Record<string, string>, index: number) => {
    if (index === 0) return // Skip header row

    cy.get('body').contains(row.Product)
  })
})

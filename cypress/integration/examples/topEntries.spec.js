/// <reference types="cypress" />

context('Top 50 Entries', () => {
  beforeEach(() => {
    cy.visit('https://reddit-top-moisesnandres1.vercel.app/')
  })

  // The most commonly used query is 'cy.get()', you can
  // think of this like the '$' in jQuery

  it('displays initial page', () => {
    cy.findByText('Top 50 Entries').should('exist')
    cy.findByText(/select an item/).should('exist')
  })

  it('selects an entry', () => {
    cy.findByText(/toy gets tricked/).click()
    cy.findByText(/select an item/).should('not.exist')
    cy.findAllByText(/toy gets tricked/).should('have.length', 2)
  })

  it('removes an entry', () => {
    cy.findByText(/toy gets tricked/).should('exist')
    cy.findByText(/toy gets tricked/).parent().findByText(/delete/i).click()
    cy.findByText(/toy gets tricked/).should('not.exist')
  })

  it('removes all entries', () => {
    cy.get('main > section article').should('have.length', 25)
    cy.findByText(/delete all/i).click()
    cy.get('main > section article').should('have.length', 0)
  })
})

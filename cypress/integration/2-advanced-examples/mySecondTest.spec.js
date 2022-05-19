const kitchenSink = Cypress.env('superEnv1')

context('basics of Cypress testing library', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should has cypress.io text', () => {
    cy.findByText('cypress.io').should('exist')
  })

  it('Should find kitchen sink on page', () => {
    cy.findByText(kitchenSink).should('exist')
  })
})

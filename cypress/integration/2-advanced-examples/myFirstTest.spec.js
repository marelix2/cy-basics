context('Basics of cypress', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/actions')
  })

  it('has h1 element on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders h1 proper text', () => {
    cy.get('h1').should('have.text', 'Actions')
  })

  it('renders paragraph under h1', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  })

  it('renders a section with correct elements', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('#actions').within(() => {
        cy.get('h4').eq(0).should('exist').should('have.text', '.type()')
      })
    })
  })
})

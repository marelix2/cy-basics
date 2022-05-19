context('Basic assertions', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('shows current page as active in dropdown ', () => {
    cy.get('.dropdown-toggle').click().then(() => {
      cy.get('.dropdown-menu')
      .should('exist')
      .find('li')
      .eq(2)
      .should('have.class', 'active')
    })
  })

  it('should not have active class on inactive pages', () => {
    cy.get('.dropdown-toggle').click().then(() => {
      cy.get('.dropdown-menu')
      .find('li').first().should('not.have.class', 'active')
      .find('a').should('have.attr', 'href', '/commands/querying')
    })
  })

  it('should change url after press in first item', () => {
    cy.get('.dropdown-toggle').click().then(() => {
      cy.get('.dropdown-menu')
        .find('li').first().click()

      cy.url().should('include', '/commands/querying')
    })
  })

  it('let you type in input', () => {
    cy.findByPlaceholderText('Enter your name')
    .type('Hello there')
    .should('have.value', 'Hello there')
  })

  it('let you clear in input', () => {
    cy.findByPlaceholderText('Enter your name')
    .type('Hello there')
    .clear().should('have.value', '')
  })

  it('lets check and uncheck checkbox', () => {
    cy.get('.checkbox').first().find('input')
    .check().should('be.checked')
    .uncheck().should('not.be.checked')
  })
})

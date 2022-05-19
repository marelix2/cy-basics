context('Network testing', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (d) {
      this.data = d
    })
  })

  it('use fixtures data for request', function () {
    cy.visit('/commands/network-requests')

    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()

    cy.wait('@getComment').then((res) => {
      cy.log(res)
    })
  })

  it('set a token in local storage', () => {
    cy.setLocalStorage('token', 'hello')

    cy.wait(1000)

    cy.getLocalStorage('token').should('eq', 'hello')
  })
})

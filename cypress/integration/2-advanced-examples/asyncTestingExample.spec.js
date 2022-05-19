context('Basics of sync/Async', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('should find email and put text to it', () => {
    cy.findByPlaceholderText('Email')
    .type('email@gmail.com')

    cy.wait(2000)

    cy.findByPlaceholderText('Email').should('have.value', 'email@gmail.com')
  })

  it('should find email and put text to it', () => {
    cy.findByPlaceholderText('Email')
    .type('email@gmail.com')
    .should('have.value', 'email@gmail.com')

    cy.wait(2000).then(() => {
      // eslint-disable-next-line no-console
      console.log('hello there, im finished')

      fetch('https://api.spacexdata.com/v3/missions')
      .then((d) => d.json())
      // eslint-disable-next-line no-console
      .then((d) => console.log(d))
    })
  })
})

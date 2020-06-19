it('can navigate to the site', () => { // this is the test
    // remote control operation
    cy.visit('http://localhost:3002')

    // assertion
    cy.url().should('include', 'localhost')
  })

  it('can type a text for a new field', () => {
    cy.get('[name="name"]')
      .type('Cameron')
      .should('have.value', 'Cameron')

      cy.get('[name="email"]')
      .type('Cameron@gmail.com')
      .should('have.value', 'Cameron@gmail.com')

      cy.get('[name="choiceOfSize"]')
      .select('Large')
      .should('have.value', 'Large')

      cy.get('[name="addToppings"]')
      .select('Pepperoni')
      .should('have.value', 'Pepperoni')


      cy.get('[name="choiceOfSauce"]')
      .select('GarlicRanch')
      .should('have.value', 'GarlicRanch')

      cy.get('button').click()

  })
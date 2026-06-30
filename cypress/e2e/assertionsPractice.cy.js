describe('Part E - Assertions Practice', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('uses different assertions', () => {

    cy.get('h2').should('have.text', 'Login Page');
    cy.get('#username').should('exist');

    cy.get('#username')
      .type('tomsmith')
      .should('have.value', 'tomsmith');

    cy.get('button').should('be.visible');
    cy.get('button').should('contain', 'Login');
    cy.get('button').should('be.enabled');

    cy.get('#username').should('have.attr', 'name', 'username');

  });

});
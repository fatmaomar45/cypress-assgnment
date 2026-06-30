describe('Part C - Basic Cypress Commands', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Visits a page and types into text fields', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
  });

  it('Clears a text field', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#username').clear();
  });

});
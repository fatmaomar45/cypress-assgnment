describe('Part D - Locators', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('uses cy.get() and cy.contains()', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('Login').should('be.visible');
  });

});

describe('Part A - Test Structure', () => {

  before(() => {
    cy.log('Runs once before all tests');
  });

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/');
  });

  it('Visit Home Page', () => {
    cy.contains('Practice Test Automation');
  });

  it('Verify URL', () => {
    cy.url().should('include', 'expandtesting');
  });

  afterEach(() => {
    cy.log('One test finished');
  });

  after(() => {
    cy.log('All tests completed');
  });

});
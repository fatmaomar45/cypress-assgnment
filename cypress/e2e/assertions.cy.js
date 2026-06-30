describe('Part B - Assertions', () => {

  it('uses expect()', () => {
    expect(10).to.equal(10);

    const name = 'John';
    expect(name).to.equal('John');

    const fruits = ['Apple', 'Banana', 'Orange'];
    expect(fruits).to.have.length(3);
  });

  it('uses should()', () => {
    cy.visit('https://practice.expandtesting.com/');

    cy.url().should('include', 'expandtesting');
    cy.title().should('contain', 'Practice');
    cy.contains('Practice Test Automation').should('be.visible');
  });

});
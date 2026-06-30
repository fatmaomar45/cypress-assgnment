describe('Part F - Working with Elements', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('works with form elements', () => {

    // Text fields
    cy.get('#firstName').type('Kara');
    cy.get('#lastName').type('Mohamed');
    cy.get('#userEmail').type('kara@example.com');

    // Radio button
    cy.get('label[for="gender-radio-1"]').click();

    // Checkbox
    cy.get('label[for="hobbies-checkbox-1"]').click();

  });

});
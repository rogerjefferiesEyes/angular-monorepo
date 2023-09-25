describe('angular-store', () => {
  beforeEach(() => {
    cy.visit('/')

    // Pass empty parameter, to default to global Eyes configuration in applitools.config.js
    cy.eyesOpen();
  });

  it('should display welcome message', () => {
    cy.contains('Welcome angular-store');
    cy.eyesCheckWindow();
  });

  afterEach(() => {
    cy.eyesClose();
  });
});

describe('inventory', () => {
  beforeEach(() => {
    cy.visit('/')

    // Pass object parameter, to override global Eyes configuration in applitools.config.js
    // Set Applitools App Name from describe/suite title
    cy.eyesOpen({
      appName: (Cypress as any).mocha.getRunner().suite.ctx._runnable.parent.title,
      batch: {
          name: 'Angular Inventory Example',
          notifyOnCompletion: true
      }
    });
  });

  it('should display welcome message', () => {
    cy.contains('product-list works');
    cy.eyesCheckWindow();
  });

  afterEach(() => {
    cy.eyesClose();
  });
});

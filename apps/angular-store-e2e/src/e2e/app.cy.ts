describe('angular-store', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.eyesOpen({
      appName: (Cypress as any).mocha.getRunner().suite.ctx._runnable.parent.title,
      batch: {
          name: 'Angular Inventory Example',
          notifyOnCompletion: true
      }
    });
  });

  it('should display welcome message', () => {
    cy.contains('Welcome angular-store');
    cy.eyesCheckWindow();
  });

  afterEach(() => {
    cy.eyesClose();
  });
});

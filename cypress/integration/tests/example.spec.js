context("example", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('display brooklin myers in the window title', () => {
    cy.title().should('include', 'Brooklin Myers')
  })
});

import {get} from "../../helpers"

context("home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("display brooklin myers in the window title", () => {
    cy.title().should("include", "Brooklin Myers");
  });

  it("should display projects, philosophy, and skillset", () => {
    cy.contains('Brooklin Myers')
    cy.contains('projects')
    cy.contains('philosophy')
    cy.contains('skillset')
    get('projectsIcon')
    get('philosophyIcon')
    get('skillsetIcon')
  })
});

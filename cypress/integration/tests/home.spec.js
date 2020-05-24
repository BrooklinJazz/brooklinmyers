import { get } from "../../helpers";

context("home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("display brooklin myers in the window title", () => {
    cy.title().should("include", "Brooklin Myers");
  });

  it("should display projects, philosophy, and skillset", () => {
    cy.contains("Brooklin Myers");
    cy.contains("projects");
    cy.contains("philosophy");
    cy.contains("skillset");

    get("projectsIcon");
    get("philosophyIcon");
    get("skillsetIcon");
  });

  it("navigates to projects", () => {
    get("projectsIcon").click();
    cy.url().should("include", "projects");
  });

  it("navigates to skillset", () => {
    get("skillsetIcon").click();
    cy.url().should("include", "skillset");
  });

  it("navigates to philosophy", () => {
    get("philosophyIcon").click();
    cy.url().should("include", "philosophy");
  });

  it("contains social media icons", () => {
    get("Linkedin");
    get("Medium");
    get("Github");
    get("Mail");
  });
});

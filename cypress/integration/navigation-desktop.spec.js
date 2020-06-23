import { TestIds } from "../../src/testIds";
import { get } from "../helpers";

context("Navigation Desktop", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("navigates to projects", () => {
    get(TestIds.NavigationProjects).click();
    cy.isInViewport(TestIds.ProjectPage)
  });

  it("navigates to philosophy", () => {
    get(TestIds.NavigationPhilosophy).click();
    cy.isInViewport(TestIds.PhilosophyPage)
  });

  it("navigates to skills", () => {
    get(TestIds.NavigationSkills).click();
    cy.isInViewport(TestIds.SkillsPage)
  });

  it("navigates to contact", () => {
    get(TestIds.NavigationContact).click();
    cy.isInViewport(TestIds.ContactPage)
  });
});
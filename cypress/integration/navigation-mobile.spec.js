import { TestIds } from "../../src/testIds";
import { get } from "../helpers";

context("Navigation Mobile", () => {
    beforeEach(() => {
      cy.visit("");
      cy.viewport('iphone-6')
      get(TestIds.ProjectPage).should("not.exist")
      get(TestIds.SkillsPage).should("not.exist")
      get(TestIds.PhilosophyPage).should("not.exist")
      get(TestIds.ContactPage).should("not.exist")
    });
    it("navigates to projects", () => {
      get(TestIds.NavigationProjects).click();
      get(TestIds.ProjectPage).should("be.visible")
    });
  
    it("navigates to philosophy", () => {
      get(TestIds.NavigationPhilosophy).click();
      get(TestIds.PhilosophyPage)
    });
  
    it("navigates to skills", () => {
      get(TestIds.NavigationSkills).click();
      get(TestIds.SkillsPage)
    });
  
    it("navigates to contact", () => {
      get(TestIds.NavigationContact).click();
      get(TestIds.ContactPage)
    });
  });
  
import { get, expectWorkingSocialIconLinks } from "../../helpers";

context("skillset", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/skillset");
  });

  expectWorkingSocialIconLinks();

  it("Includes job description", () => {
    cy.contains("Web/Mobile FullStack Developer");
  });
  it("Includes keyword stack comment", () => {
    cy.contains("Don’t see the right keyword?");
    cy.contains("No worries - I love learning new stacks");
  });

  it.only("Includes relevant skills", () => {
    // the spaces after each line matter for avoiding new lines in strings.
    const skills = `
    Javascript Typescript Elixir React Expo SASS/CSS 
    Redux Styled_Components React_Native_Testing_Library React_Testing_Library 
    Jest Mocha Chai Appium Redux_Devtools Cypress Apollo 
    Graphql Mongo/Mongoose Express Phoenix Node Docker Heroku 
    `
      .split(" ")
      .filter(each => each.length > 2) // filter to remove "" and "\n"
      .map(each => each.split("_").join(" ")); // replace "_" used to keep multi-word values together with " "
    console.log(skills);
    skills.forEach(each => cy.contains(each));
  });
});

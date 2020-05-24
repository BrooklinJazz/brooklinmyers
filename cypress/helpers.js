import { LinkedinURL, MediumURL, GithubURL } from "./constants";
export const get = testId => cy.get(`[data-test-id=${testId}]`);

export const expectWorkingSocialIconLinks = () => {
  it("contains working social media icons", () => {
    get("Linkedin").should("have.prop", "href", LinkedinURL);
    get("Medium").should("have.prop", "href", MediumURL);
    get("Github").should("have.prop", "href", GithubURL);
    // TODO test mail functionality
    get("Mail");
  });
};

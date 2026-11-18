describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the introduction text", () => {
    // The name is typed out one character per span, so check the heading's
    // text rather than looking for a single element holding the phrase.
    cy.get("h1")
      .should("be.visible")
      .and("contain.text", "I'm Henrique Ferreira");
  });

  it("should render the cycling goal section", () => {
    cy.contains("Cycling Goal").should("be.visible");
  });
});

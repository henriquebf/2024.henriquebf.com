describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the introduction text", () => {
    cy.contains("I am Henrique Ferreira").should("be.visible");
  });

  it("should render the cycling goal section", () => {
    cy.contains("Cycling Goal").should("be.visible");
  });
});

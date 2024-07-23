describe("Home Page", () => {
  it("should render the home page correctly", () => {
    cy.visit("http://localhost:3000");

    cy.contains("I am Henrique Ferreira").should("be.visible");
    cy.contains("contact@henriquebf.com").should("be.visible");
  });
});

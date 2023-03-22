import LandingPage  from "../pages/landing";
//import "cypress-mochawesome-reporter/register";


describe('Testing the hotel booking form', () => {
  const page = new LandingPage();
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it('Adding data to form', () => {
     page.visit();
     page.fill_form();
    
  })

  it('Verifying data', () => {
    page.visit();
    cy.wait(3000);
    page.verify_data();
  })

  it('Deleting row', () => {
    page.visit();
    cy.wait(3000);
    page.delete_row()
  })
})
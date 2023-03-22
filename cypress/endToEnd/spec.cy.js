import LandingPage  from "../pages/landing";
import "cypress-mochawesome-reporter/register";


describe('hotel booking form testing', () => {
  const page = new LandingPage();
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it('filing the booking form', () => {
     page.visit();
     page.fill_form();
    
  })

  it('Assertions', () => {
    page.visit();
    cy.wait(6000);//wait to load the data
    page.verifybookingdata();
  })

  it('Deleting data', () => {
    page.visit();
    cy.wait(6000); //wait to load the data
    page.deletebookingdata()
  })
})
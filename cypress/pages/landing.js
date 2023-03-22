import { elements } from "./Objs";

class LandingPage {
  load_Link() {
    cy.visit(elements.link);
  }

  fill() {
    cy.get(elements.firstName).type("Thapelo");
    cy.get(elements.lastName).type("Nghayo");
    cy.get(elements.price).type("150");

    cy.get(elements.deposit)
      .select("false")
      .invoke("val")
      .should("eq", "false");

    cy.get(elements.checkIn).type("2020-05-05");
    cy.get(elements.checkOut).type("2020-05-10");
    cy.get(elements.save).click();

    cy.wait(3000);

    cy.get(elements.rows).its("length").should("be.gte", 1);
  }

  verify() {
    cy.get(elements.rows).each(($el, index, $list) => {
      let cellData = $el.find(elements.tableCell).text();

      if (cellData.includes("John")) {
        
        cy.get($el).find(elements.tableCell).should("contain", "Thapelo");
        cy.get($el).find(elements.tableCell).should("contain", "Nghayo");
        cy.get($el).find(elements.tableCell).should("contain", "150");
        cy.get($el).find(elements.tableCell).should("contain", "false");
        cy.get($el).find(elements.tableCell).should("contain", "2020-05-05");
        cy.get($el).find(elements.tableCell).should("contain", "2020-05-10");
      }
    });
  }

  delete() {
    cy.get(elements.delete).each(($el, index, $list) => {
      cy.get($el).click({ multiple: true });
    })
    
  }
}

export default LandingPage;

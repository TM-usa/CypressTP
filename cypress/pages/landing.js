import { objectelements } from "../Object/objectelements";

class HomePage{
    visit(){
        cy.visit(objectelements.link);
    }

    //fill in the booking form

    fill_form(){
    cy.get(objectelements.first_name).type("Thapelo");
    cy.get(objectelements.last_name).type("Nghayo");
    cy.get(objectelements.tot_price).type("5264");

    //drop down
    cy.get(objectelements.deposit_amount)
    .select("true")
    .invoke("val")
    .should("eq", "true");

    cy.get(objectelements.checkIn).type("2023-03-28");
    cy.get(objectelements.checkOut).type("2023-04-30");
    cy.get(objectelements.save_button).click();

    cy.wait(4000);

    cy.get(objectelements.row_data).its("length").should("be.gte", 1);
    }


    verifybookingdata() { //verify the object elements
      cy.get(objectelements.row_data).each(($el, index, $list) => {
        let cellData = $el.find(objectelements.tableCell).text();
        if (cellData.includes("John")) {
          cy.get($el).find(objectelements.tableCell).should("contain", "Thapelo");
          cy.get($el).find(objectelements.tableCell).should("contain", "Nghayo");
      
        }
      });
    }

    //delete
    deletebookingdata(){
        cy.get(objectelements.delete).each(($el, index, $list) => {
            cy.get($el).click({ multiple: true });
    })
    

        }
    }
    export default HomePage;
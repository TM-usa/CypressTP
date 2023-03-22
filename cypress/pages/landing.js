import { elements } from "../Object/objectelements";

class HomePage{
    site(){
        cy.visit(elements.link);
    }

    //fill in the booking form

    book(){
    cy.get(elements.first_name).type("Limakatso");
    cy.get(elements.last_name).type("Ntoba");
    cy.get(elements.tot_price).type("3800");

    //deposit drop down
    cy.get(elements.deposit_amount)
    .select("true")
    .invoke("val")
    .should("eq", "true");

    cy.get(elements.check_in).type("2023-04-03");
    cy.get(elements.check_out).type("2023-04-10");
    cy.get(elements.save_button).click();

    cy.wait(1000);

    cy.get(elements.row_data).its("length").should("be.gte", 1);
    }

    //delete the booking
    deleteBooking(){
        cy.get(elements.delete).each(($el, index, $list) => {
            cy.get($el).click({ multiple: true });
    })
    

        }
    }
    export default HomePage;
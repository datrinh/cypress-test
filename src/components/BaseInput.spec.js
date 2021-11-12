/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import Input from "./BaseInput.vue";

it("renders an input", () => {
  mount(Input);

  cy.get("input")
});

it("can be disabled", () => {
  mount(Input, {
    propsData: {
      disabled: true,
    },
  });

  cy.get("input").should('be.disabled')
});

it("can enter text into input", () => {
  mount(Input, {
    propsData: {
      type: 'text',
    },
  });

  cy.get("input").type("ABCDE").should('have.value', "ABCDE")
});

it("can't enter chars into number input", () => {
  mount(Input, {
    propsData: {
      type: 'number',
    },
  });

  cy.get("input").type("ABCDE").should('have.value', '')
});

it("clears value when button pressed", () => {
  mount(Input);

  cy.get("input").type("ABCDE").should('have.value', 'ABCDE')
  cy.get("button").contains('clear').click()
  cy.get("input").should('have.value', '')
});
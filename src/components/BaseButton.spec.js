/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import Button from "./BaseButton.vue";

it("shows correct default slot", () => {
  mount(Button, {
    slots: {
      default: "Test button",
    },
  });

  cy.get("button").contains("Test button")
});

it("can be disabled", () => {
  mount(Button, {
    slots: {
      default: "Disabled Button",
    },
    propsData: {
      disabled: true,
    },
    
  });

  cy.get("button").contains("Disabled Button").should('be.disabled')
});

import * as faker from "faker";
import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";

// export interface TSINgxStepOption extends INgxbStepOption {
//   el: HTMLElement;
// }

// const getEl = (id: string) => {
//   console.log('getEl()');
//   return document.getElementById(id) as HTMLElement
// }

export const trumpTourSteps: INgxbStepOption[] = [
  {
    stepId: 'start.trump.tour',
    anchorId: "start.trump.tour",
    route: "trump-detection/trumps-rules",
    content: "Welcome to the Trump Detection Unit tour!",
    placement: "right",
    title: "Welcome",
    nextStep: 'trump.rule.name',
  },
  {
    stepId: "trump.rule.name",
    anchorId: "trump.rule.name",
    route: "trump-detection/trumps-rules",
    content: faker.lorem.sentence(40),
    placement: "bottom",
    title: 'This is the rule name',
    nextStep: 'trump.contact.new',
  },
  {
    stepId: "trump.contact.new",
    anchorId: "trump.contact.new",
    route: "trump-detection/trumps-rules",
    content: faker.lorem.paragraph(6),
    placement: "left",
    title: 'Create new contact',
    nextStep: 'trump.contact.edit',
  },
  {
    stepId: "trump.contact.edit",
    anchorId: "trump.contact.edit",
    route: "trump-detection/trumps-rules",
    content: faker.lorem.paragraph(6),
    placement: "right",
    title: 'Edit the contact',
  },

];

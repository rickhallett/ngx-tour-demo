import * as faker from "faker";
import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";

export const formTourSteps: INgxbStepOption[] = [
  {
    anchorId: "start.form.tour",
    route: "checkout",
    content: "Welcome to the Ngx-Tour Forms tour!",
    placement: "right",
    title: "Welcome",
  },
  {
    anchorId: "form.billing",
    route: "checkout",
    content: "Please provide your billing address",
    placement: "top",
    title: faker.lorem.sentence(3),
  },
  {
    anchorId: "form.lastname",
    route: "checkout",
    content: "Please give all your information to us",
    placement: "top",
    title: faker.lorem.sentence(3),
  },
  {
    anchorId: "form.username",
    route: "checkout",
    content: "Please provide your billing address",
    placement: "right",
    title: faker.lorem.sentence(3),
  },
  {
    anchorId: "form.email",
    route: "checkout",
    content: "Please enter a valid email address format <name>@<provider>.<domain>",
    placement: "bottom",
    title: faker.lorem.sentence(3),
  },
  {
    anchorId: "form.creditcard",
    route: "checkout",
    content: "Credit card format: <XXXX XXXX XXXX XXXX>",
    placement: "right",
    title: faker.lorem.sentence(3),
  },
];

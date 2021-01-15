import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";
import * as faker from 'faker';

export const docsTourSteps: INgxbStepOption[] = [
  {
    anchorId: "start.docs.tour",
    route: "docs",
    content: "Welcome to the Docs Tour!",
    placement: "right",
    title: "Good day, Sir",
  },
  {
    anchorId: "angular-ui-tour",
    route: "docs",
    content: "Thanks to angular-ui-tour for the inspiration for the library",
    placement: "bottom",
    title: "angular-ui-tour",
  },
  {
    anchorId: "usage",
    route: "docs",
    content: faker.lorem.sentence(20),
    placement: "left",
    title: faker.lorem.sentence(5),
  },
  {
    anchorId: "docs.tourService",
    route: "docs",
    content: faker.lorem.sentence(20),
    placement: "bottom",
    title: faker.lorem.sentence(5),
  },
  {
    anchorId: "docs.defaults",
    route: "docs",
    content:
    faker.lorem.sentence(20),
    placement: "top",
    title: faker.lorem.sentence(5),
  },
  {
    anchorId: "installation",
    route: "docs",
    content:
    faker.lorem.sentence(20),
    title: faker.lorem.sentence(5),
    placement: "top",
  },
  {
    anchorId: "dash.shipments",
    route: "dash",
    content: faker.lorem.sentence(20),
    title: "Route Return",
  },
  {
    anchorId: "docs.tourService",
    route: "docs",
    content: faker.lorem.sentence(20),
    placement: "auto",
    title: "notifications",
  },
  {
    anchorId: "pricing.title",
    route: "pricing",
    content: faker.lorem.sentence(20),
    placement: "auto",
    title: faker.lorem.sentence(5),
  },
  // TODO: this feature is not available in version 2.0.0
  // {
  //   anchorId: "pricing.containerClass",
  //   route: "pricing",
  //   content: "You can add custom container class.",
  //   title: "Custom CSS Class",
  //   containerClass: "custom-tour-class",
  // },
  {
    anchorId: "config.placement.default",
    route: "docs",
    content:
      "Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",
    title: "No Placement",
  },
  {
    anchorId: "config.placement.default",
    route: "docs",
    content: "Sliiide to the left.",
    placement: "left",
    title: "Left Placement",
  },
  {
    anchorId: "config.placement.default",
    route: "docs",
    content: "Sliiide to the right.",
    placement: "right",
    title: "Right Placement",
  },
  {
    anchorId: "config.placement.default",
    route: "docs",
    content: "Take it back now y'all.  One hop this time.",
    placement: "bottom",
    title: "Bottom Placement",
  },
  {
    anchorId: "config.buttons.custom",
    route: "docs",
    content: "You can set custom step button names",
    title: "Button Titles",
    prevBtnTitle: "My Prev",
    nextBtnTitle: "My Next",
    endBtnTitle: "My End",
  },
  {
    anchorId: "hotkeys",
    route: "docs",
    content: "Try using the hotkeys to navigate through the tour.",
    title: "Hotkeys",
  },
  {
    anchorId: "events",
    route: "docs",
    content: "You can subscribe to events",
    title: "Events",
  },
];

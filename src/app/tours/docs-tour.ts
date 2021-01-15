import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";

export const docsTourSteps: INgxbStepOption[] = [
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
    content: "Energy management is everything",
    placement: "bottom",
    title: "Empty your cup",
  },
  {
    anchorId: "docs.tourService",
    route: "docs",
    content: "We show the way, you just pay",
    placement: "bottom",
    title: "Generally renders half way off screen",
  },
  {
    anchorId: "docs.defaults",
    route: "docs",
    content:
      "And scroll all the way down (if placement == left, this will scroll but be partially off screen",
    placement: "left",
    title: "If set to bottom, this renders completely off screen",
  },
  {
    anchorId: "installation",
    route: "docs",
    content:
      "And scroll all the way back up...(if placement == top, this will be completely off screen)",
    title: "This will scroll up, and render on screen, if placement == bottom",
    placement: "top",
  },
  {
    anchorId: "dash.shipments",
    route: "dash",
    content: "We provide both ethical and unethical shipments globaally",
    title: "Route Return",
  },
  {
    anchorId: "docs.tourService",
    route: "docs",
    content: "controls the tour",
    placement: "auto",
    title: "notifications",
  },
  {
    anchorId: "pricing.title",
    route: "pricing",
    content:
      "Buy anything you like at extortionate prices (we are not here for you benefit)",
    placement: "auto",
    title: "Deals deals deals",
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

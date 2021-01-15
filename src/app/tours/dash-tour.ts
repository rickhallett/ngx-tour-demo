import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";

export const dashTourSteps: INgxbStepOption[] = [
  {
    anchorId: "start.tour",
    content: "Welcome to the Ngx-Tour tour!",
    placement: "right",
    title: "Welcome",
  },
  {
    anchorId: "start.tour",
    content: "Welcome to the Ngx-Tour tour!",
    placement: "bottom",
    title: "Bottom",
  },
  {
    anchorId: "start.tour",
    content: "Welcome to the Ngx-Tour tour!",
    placement: "left",
    title: "Left",
  },
  {
    anchorId: "start.tour",
    content: "Oops! We can probably fix this with CSS, but better to wait the real dev starts",
    placement: "top",
    title: "Top",
  }
];

import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";
import { blogTourSteps } from "./blogs-tour";

import { docsTourSteps } from "./docs-tour";

// TODO: feature not available in v2.0.0
// export interface TSINgxbStepOption extends INgxbStepOption {
//   containerClass?: string;
// }

export interface TSINgxRoute {
  route: string;
}

export const appTourStartingRoute: TSINgxRoute = {
  route: "dash"
};

export const appTourSteps: INgxbStepOption[] = [
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
  },
  ...docsTourSteps,
  ...blogTourSteps,
];

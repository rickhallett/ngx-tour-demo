import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";
import { blogTourSteps } from "./blogs-tour";
import { dashTourSteps } from "./dash-tour";

import { docsTourSteps } from "./docs-tour";
import { formTourSteps } from "./form-tour";
import { trumpTourSteps } from "./trump-tour";

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
  ...dashTourSteps,
  ...docsTourSteps,
  ...blogTourSteps,
  ...formTourSteps,
  ...trumpTourSteps
];

import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";
import { blogTourSteps } from "./blogs-tour";

import { docsTourSteps } from "./docs-tour";

export interface TSINgxbStepOption extends INgxbStepOption {
  containerClass?: string;
}

export interface TSINgxRoute {
  route: string;
}

export const appTourStartingRoute: TSINgxRoute = {
  route: "dash", // acts as the 'base' route. If not defined on each step, this is where it returns to
};

export const appTourSteps: TSINgxbStepOption[] = [
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
    content: "Welcome to the Ngx-Tour tour!",
    placement: "top",
    title: "Top",
  },
  ...docsTourSteps,
  ...blogTourSteps,
];

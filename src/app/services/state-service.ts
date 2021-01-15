import { Injectable } from "@angular/core";
import { TourService } from "ngx-tour-ngx-bootstrap";

@Injectable()
export class StateService {
  public tour: TourService;

  constructor() {
    console.log("State init");
  }

  setTour(tour: TourService): void {
    this.tour = tour;
  }

  findAnchorById(id: string): number {
    const step = this.tour.steps.findIndex((step) => step.anchorId === id);

    if (step !== -1) {
      console.log("step", step);
      return step;
    }

    console.error(
      `No anchor with id '${id}' was found. Locating to first step`
    );
    return 0;
  }
}

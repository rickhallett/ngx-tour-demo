import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TourService } from "ngx-tour-ngx-bootstrap";
import { BrowserLogger, BrowserLoggerService } from "./browser-logger.service";

@Injectable()
export class StateService {
  public tour: TourService;
  private log: BrowserLogger;

  constructor(private router: Router, private browserLoggerService: BrowserLoggerService) {
    this.log = browserLoggerService.createLog('StateService', 'limegreen');
    this.log("State init");
  }

  setTour(tour: TourService): void {
    this.tour = tour;
  }

  findAnchorById(id: string): number {
    const step = this.tour.steps.findIndex((step) => step.anchorId === id);

    if (step !== -1) {
      this.log("step found with id:", step);
      return step;
    }

    this.log(
      `No anchor with id '${id}' was found`
    );
    this.router.navigateByUrl('/not-found');

    return 0;
  }
}

import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";
import {
  BrowserLogger,
  BrowserLoggerService,
} from "../../services/browser-logger.service";
import {
  TSINgxbStepOption,
  TSINgxRoute,
  appTourSteps,
  appTourStartingRoute,
} from "../../tours/app-tour";
import { StateService } from "../../services/state-service";
import { RepositionPopupService } from "../../services/reposition-popup.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  private log: BrowserLogger;

  private tourSteps: TSINgxbStepOption[] = appTourSteps;
  private tourRoute: TSINgxRoute = appTourStartingRoute;

  constructor(
    public tourService: TourService,
    private browserLoggerService: BrowserLoggerService,
    @Inject(DOCUMENT) private dom,
    private stateService: StateService,
    private repositionPopupService: RepositionPopupService
  ) {
    this.log = this.browserLoggerService.createLog(
      "HomeComponent",
      "lightblue"
    );
  }

  ngOnInit() {
    this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
      this.log("tour configured with these steps:", steps);
    });

    this.tourService.initialize(this.tourSteps, this.tourRoute);

    this.tourService.start$.subscribe((step: IStepOption) => {
      this.log("tour start:", step);
    });

    this.tourService.end$.subscribe((step: any) => {
      this.log("tour end:", step);
    });

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log("step shown:", step);
    });

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log("step changed, scrolling to view...");

      // HACK ALERT - this forces the call back to be placed onto the event queue
      // without it, it won't play with angulars own render cycles
      setTimeout(() => {
        this.repositionPopupService.scrollIntoViewIfNeeded();
      }, 0);
    });

    this.tourService.anchorRegister$.subscribe((anchor: string) => {
      this.log("anchor registered:", anchor);
    });

    this.tourService.anchorUnregister$.subscribe((sanchor: string) => {
      this.log("anchor unregistered:", sanchor);
    });

    this.stateService.setTour(this.tourService);
  }

  startAppTour(): void {
    this.stateService.tour.startAt(0);
  }
}

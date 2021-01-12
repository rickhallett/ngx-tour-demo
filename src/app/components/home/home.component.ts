import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from 'ngx-tour-ngx-bootstrap/step-option.interface';
import { BrowserLogger, BrowserLoggerService } from "../../services/browser-logger.service";
import { TSINgxbStepOption, TSINgxRoute, appTourSteps, appTourStartingRoute } from "../../tours/app-tour";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private log: BrowserLogger;

  private tourSteps: TSINgxbStepOption[] = appTourSteps;
  private tourRoute: TSINgxRoute = appTourStartingRoute


  constructor(public tourService: TourService, private browserLoggerService: BrowserLoggerService, @Inject(DOCUMENT) private dom) {
    this.log = this.browserLoggerService.createLog('HomeComponent', 'lightblue');
    this.log('tourService', tourService);
  }

  ngOnInit() {
    this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
      this.log('tour configured with these steps:', steps);
    });

    this.tourService.initialize(this.tourSteps, this.tourRoute);

    this.tourService.start$.subscribe((step: IStepOption) => {
      this.log('tour start:', step);
    });

    this.tourService.end$.subscribe((step: any) => {
      this.log('tour end:', step);
    });

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log('step shown:', step);
    });

    this.tourService.anchorRegister$.subscribe((anchor: string) => {
      this.log('anchor registered:', anchor);
    });

    this.tourService.anchorUnregister$.subscribe((sanchor: string) => {
      this.log('anchor unregistered:', sanchor);
    });

    this.tourService.start();
  }

}

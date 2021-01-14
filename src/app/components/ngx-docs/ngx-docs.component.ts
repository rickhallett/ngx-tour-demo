import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { TourService, IStepOption } from "ngx-tour-ngx-bootstrap";
import { Subscription } from "rxjs/Subscription";
import {
  BrowserLoggerService,
  BrowserLogger,
} from "../../services/browser-logger.service";
import { RepositionPopupService } from "../../services/reposition-popup.service";
import {
  TSINgxbStepOption,
  docsTourSteps,
  TSINgxRoute,
  docsTourStartingRoute,
} from "../../tours/docs-tour";

@Component({
  selector: "app-ngx-docs",
  templateUrl: "./ngx-docs.component.html",
  styleUrls: ["./ngx-docs.component.css"],
  // providers: [TourService]
  // providers: [TourService, /* TourStepTemplateService */] // using TourService at the component level breaks the 'next step' functionality
})
export class NgxDocsComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private log: BrowserLogger;

  private tourSubscription: Subscription[] = [];
  private tourSteps: TSINgxbStepOption[] = docsTourSteps;
  private tourRoute: TSINgxRoute = docsTourStartingRoute;

  constructor(
    private repositionPopupService: RepositionPopupService,
    private browserLoggerService: BrowserLoggerService,
    public tourService: TourService
  ) {
    this.log = browserLoggerService.createLog("NgxDocsComponent", "green");

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log("step changed, scrolling to view...");

      // HACK ALERT - this forces the call back to be placed onto the event queue
      // without it, it won't play with angulars own render cycles
      setTimeout(() => {
        this.repositionPopupService.scrollIntoViewIfNeeded();
      }, 0);
    });
  }

  ngOnInit(): void {
    this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
      this.log("tour configured with these steps:", steps);
    });

    // TECH-SUPPORT: this is the first call to tourService.initialize, provided /docs is hit first.
    // This works without apparent issue.
    this.tourService.initialize(this.tourSteps, this.tourRoute);

    this.tourSubscription.push(
      this.tourService.start$.subscribe((step: IStepOption) => {
        this.log("tour start:", step);
      })
    );

    this.tourSubscription.push(
      this.tourService.end$.subscribe((step: any) => {
        this.log("tour end:", step);
      })
    );

    this.tourSubscription.push(
      this.tourService.stepShow$.subscribe((step: IStepOption) => {
        this.log("step shown:", step);
      })
    );

    this.tourSubscription.push(
      this.tourService.anchorRegister$.subscribe((anchor: string) => {
        this.log("anchor registered:", anchor);
      })
    );

    this.tourSubscription.push(
      this.tourService.anchorUnregister$.subscribe((sanchor: string) => {
        this.log("anchor unregistered:", sanchor);
      })
    );
  }

  ngAfterViewInit(): void {
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    this.tourSubscription.forEach((sub) => sub.unsubscribe()); // NG: has no effect on allowing BlogComponent to re-init TourService
  }
}

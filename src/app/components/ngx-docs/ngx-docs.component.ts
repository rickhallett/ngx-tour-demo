import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-ngx-bootstrap';
import { BrowserLoggerService, BrowserLogger } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';
import { TSINgxbStepOption, appTourSteps, TSINgxRoute, appTourStartingRoute } from '../../tours/docs-tour';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css'],
  // providers: [TourService] // using TourService at the component level breaks the 'next step' functionality
})
export class NgxDocsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private log: BrowserLogger;

  private tourSteps: TSINgxbStepOption[] = appTourSteps;
  private tourRoute: TSINgxRoute = appTourStartingRoute

  constructor(private repositionPopupService: RepositionPopupService, private browserLoggerService: BrowserLoggerService, public tourService: TourService) {
    this.log = browserLoggerService.createLog('NgxDocsComponent', 'green');

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log('step changed, scrolling to view...');

      // HACK ALERT - this forces the call back to be placed onto the event queue
      // without it, it won't play with angulars own render cycles
      setTimeout(() => {
        this.repositionPopupService.scrollIntoViewIfNeeded();
      }, 0)
      
    });
  }

  ngOnInit(): void {
    this.log('repositionPopupService:', this.repositionPopupService);

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
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');

    // HACK ALERT
    // setTimeout(() => {
    //   
    // }, 1000);
  }

}

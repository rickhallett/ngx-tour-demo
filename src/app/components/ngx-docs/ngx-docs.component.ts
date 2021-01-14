import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-ngx-bootstrap';
import { TourStepTemplateService } from 'ngx-tour-ngx-bootstrap/tour-step-template.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BrowserLoggerService, BrowserLogger } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';
import { TSINgxbStepOption, docsTourSteps, TSINgxRoute, docsTourStartingRoute } from '../../tours/docs-tour';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css'],
  // providers: [TourService, /* TourStepTemplateService */] // using TourService at the component level breaks the 'next step' functionality
})
export class NgxDocsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private log: BrowserLogger;

  private tourSubscription: Subscription[] = [];
  private tourSteps: TSINgxbStepOption[] = docsTourSteps;
  private tourRoute: TSINgxRoute = docsTourStartingRoute

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
    this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
      this.log('tour configured with these steps:', steps);
    });

    this.tourService.initialize(this.tourSteps, this.tourRoute);

    this.tourSubscription.push(this.tourService.start$.subscribe((step: IStepOption) => {
      this.log('tour start:', step);
    }));

    this.tourSubscription.push(this.tourService.end$.subscribe((step: any) => {
      this.log('tour end:', step);
    }));

    this.tourSubscription.push(this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log('step shown:', step);
    }));

    this.tourSubscription.push(this.tourService.anchorRegister$.subscribe((anchor: string) => {
      this.log('anchor registered:', anchor);
    }));

    this.tourSubscription.push(this.tourService.anchorUnregister$.subscribe((sanchor: string) => {
      this.log('anchor unregistered:', sanchor);
    }));
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

  ngOnDestroy(): void {
    this.tourSubscription.forEach(sub => sub.unsubscribe());
    // delete this.tourService;
  }

}

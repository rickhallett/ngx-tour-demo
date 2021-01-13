import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-ngx-bootstrap';
import { BrowserLoggerService, BrowserLogger } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';
import { docsTourStartingRoute, docsTourSteps, TSINgxbStepOption, TSINgxRoute } from '../../tours/docs-tour';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css'],
  providers: [TourService]
})
export class NgxDocsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private log: BrowserLogger;

  private tourSteps: TSINgxbStepOption[] = docsTourSteps;
  private tourRoute: TSINgxRoute = docsTourStartingRoute;

  constructor(private repositionPopupService: RepositionPopupService, private browserLoggerService: BrowserLoggerService, public tourService: TourService) {
    this.log = browserLoggerService.createLog('NgxDocsComponent', 'green');
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

      this.log('step changed, scrolling to view...');

      // HACK ALERT
      setTimeout(() => {
        this.repositionPopupService.scrollIntoViewIfNeeded();
      }, 0)
    });

    this.tourService.anchorRegister$.subscribe((anchor: string) => {
      this.log('anchor registered:', anchor);
    });

    this.tourService.anchorUnregister$.subscribe((sanchor: string) => {
      this.log('anchor unregistered:', sanchor);
    });

    // this.tourService.start();
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-core';
import { BrowserLogger, BrowserLoggerService } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';
import { blogTourStartingRoute, blogTourSteps, TSINgxbStepOption, TSINgxRoute } from '../../tours/blog-tour';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  // providers: [TourService]
})
export class BlogComponent implements OnInit, OnDestroy {
  private log: BrowserLogger;

  private tourSteps: TSINgxbStepOption[] = blogTourSteps;
  private tourRoute: TSINgxRoute = blogTourStartingRoute

  constructor(private repositionPopupService: RepositionPopupService, private browserLoggerService: BrowserLoggerService, public tourService: TourService) {
    this.log = browserLoggerService.createLog('BlogComponent', 'lightblue');

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log('step changed, scrolling to view...');

      // HACK ALERT - this forces the call back to be placed onto the event queue
      // without it, it won't play with angulars own render cycles
      setTimeout(() => {
        this.repositionPopupService.scrollIntoViewIfNeeded();
      }, 0)
      
    });
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

    this.tourService.anchorUnregister$.subscribe((anchor: string) => {
      this.log('anchor unregistered:', anchor);
    });
  }

  ngOnDestroy(): void {
    // TODO: does tourService tear itself down on component destroy?
  }

}

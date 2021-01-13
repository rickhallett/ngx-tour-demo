import { Component, OnInit } from '@angular/core';
import { IStepOption, TourService } from 'ngx-tour-ngx-bootstrap';
import { BrowserLogger, BrowserLoggerService } from '../../services/browser-logger.service';
import { TSINgxbStepOption, TSINgxRoute, blogTourSteps, blogTourStartingRoute } from '../../tours/blog-tour';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [TourService]
})
export class BlogComponent implements OnInit {
  private log: BrowserLogger;

  // BUG: 'cannot find next step, no current step'
  // This never occured before providing the TourService individually for components; is it a library limitation?
  private tourSteps: TSINgxbStepOption[] = blogTourSteps;
  private tourRoute: TSINgxRoute = blogTourStartingRoute;

  constructor(public tourService: TourService, private browserLoggerService: BrowserLoggerService) {
    this.log = this.browserLoggerService.createLog('BlogComponent', 'lightgreen');
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
  }

}

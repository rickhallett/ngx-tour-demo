import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-ngx-bootstrap';
import { BrowserLoggerService, BrowserLogger } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css']
})
export class NgxDocsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private log: BrowserLogger;

  constructor(private repositionPopupService: RepositionPopupService, private browserLoggerService: BrowserLoggerService, private tourService: TourService) {
    this.log = browserLoggerService.createLog('NgxDocsComponent', 'green');

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      this.log('step changed, scrolling to view...');

      // HACK ALERT
      setTimeout(() => {
        this.repositionPopupService.scrollIntoViewIfNeeded();
      }, 0)
      
    });
  }

  ngOnInit(): void {
    this.log('repositionPopupService:', this.repositionPopupService);
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

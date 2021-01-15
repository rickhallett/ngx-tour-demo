import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-ngx-bootstrap';
import { StateService } from '../../services/state-service';
import { BrowserLoggerService, BrowserLogger } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css']
})
export class NgxDocsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private log: BrowserLogger;

  constructor(private repositionPopupService: RepositionPopupService, private browserLoggerService: BrowserLoggerService, private stateService: StateService) {
    this.log = browserLoggerService.createLog('NgxDocsComponent', 'green');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
    this.log('state:', this.stateService);
  }

  ngOnDestroy(): void {
    this.stateService.tour.end();
  }  

  startDocsTour(): void {
    this.stateService.tour.startAt(2);
  }

}

import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { BrowserLoggerService, BrowserLogger } from '../../services/browser-logger.service';
import { RepositionPopupService } from '../../services/reposition-popup.service';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css']
})
export class NgxDocsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private log: BrowserLogger;

  constructor(private repositionPopupService: RepositionPopupService, private browserLoggerService: BrowserLoggerService) {
    this.log = browserLoggerService.createLog('NgxDocsComponent', 'green');
  }

  ngOnInit(): void {
    this.log('repositionPopupService:', this.repositionPopupService);
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
    this.repositionPopupService.scrollIntoViewIfNeeded();
  }

}

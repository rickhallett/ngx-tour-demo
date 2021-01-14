import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from 'ngx-tour-ngx-bootstrap/step-option.interface';
import { BrowserLogger, BrowserLoggerService } from "../../services/browser-logger.service";
import { TSINgxbStepOption, TSINgxRoute, appTourSteps, appTourStartingRoute } from "../../tours/docs-tour";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private log: BrowserLogger;

  constructor(private browserLoggerService: BrowserLoggerService, @Inject(DOCUMENT) private dom) {
    this.log = this.browserLoggerService.createLog('HomeComponent', 'lightblue');
  }

  ngOnInit() {
    
  }

}

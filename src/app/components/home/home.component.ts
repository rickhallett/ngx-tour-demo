import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { BrowserLogger, BrowserLoggerService } from "../../services/browser-logger.service";

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

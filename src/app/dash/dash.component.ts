import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from 'ngx-tour-ngx-bootstrap/step-option.interface';

interface TSINgxbStepOption extends INgxbStepOption {
  containerClass?: string;
}

interface TSINgxRoute {
  route: string;
}

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"],
})
export class DashComponent implements OnInit, OnDestroy {
  
  ngOnInit() {}

  ngOnDestroy() {
    console.log('dash component destroyed')
  }
}

import { Component, OnInit } from '@angular/core';

import { TourService } from "ngx-tour-ngx-bootstrap";
import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";

interface TSINgxbStepOption extends INgxbStepOption {
  containerClass?: string;
}

interface TSINgxRoute {
  route: string;
}

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css']
})
export class NgxDocsComponent implements OnInit {

  // public docsSteps: TSINgxbStepOption[] = [
  //   {
  //     anchorId: "angular-ui-tour",
  //     content: "Thanks to angular-ui-tour for the inspiration for the library",
  //     placement: "bottom",
  //     title: "angular-ui-tour",
  //   }
  // ];

  // public docsRoute: TSINgxRoute = {
  //   route: "ngx-docs",
  // };

  constructor(public tourService: TourService) {
    // console.log("tourService", tourService);
  }

  ngOnInit() {
    // this.tourService.initialize(this.docsSteps, this.docsRoute);
    // this.tourService.start();
  }

}

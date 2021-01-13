import { Component, OnDestroy, OnInit } from "@angular/core";
import { TourService } from "ngx-tour-ngx-bootstrap";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"],
  providers: [TourService]
})
export class DashComponent implements OnInit, OnDestroy {

  constructor(public tourService: TourService) {

  }
  
  ngOnInit() {}

  ngOnDestroy() {
    console.log('dash component destroyed')
  }
}

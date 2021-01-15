import { Component, OnDestroy, OnInit } from "@angular/core";
import { StateService } from "../../services/state-service";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"],
})
export class DashComponent implements OnInit, OnDestroy {

  constructor(private stateService: StateService) {

  }
  
  ngOnInit() {}

  ngOnDestroy() {
    console.log('dash component destroyed');

    this.stateService.tour.end();
  }

  startAppTour(): void {
    this.stateService.tour.startAt(0);
  }
}

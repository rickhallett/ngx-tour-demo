import { Component, OnInit } from "@angular/core";
import { StateService } from "../../services/state-service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit() {}

  startFormTour(): void {
    this.stateService.tour.startAt(
      this.stateService.findAnchorById("start.form.tour")
    );
  }
}

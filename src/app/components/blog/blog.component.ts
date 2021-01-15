import { Component, OnInit } from "@angular/core";
import { StateService } from "../../services/state-service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit() {}

  startBlogTour(): void {
    this.stateService.tour.startAt(
      this.stateService.findAnchorById("start.blog.tour")
    );
  }
}

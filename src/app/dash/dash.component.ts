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
  public dashSteps: TSINgxbStepOption[] = [
    {
      anchorId: "start.tour",
      content: "Welcome to the Ngx-Tour tour!",
      placement: "auto",
      title: "Welcome",
    },
    {
      anchorId: "angular-ui-tour",
      route: "docs",
      content: "Thanks to angular-ui-tour for the inspiration for the library",
      placement: "bottom",
      title: "angular-ui-tour",
    },
    {
      anchorId: "usage",
      route: "docs",
      content: "Energy management is everything",
      placement: "bottom",
      title: "Empty your cup"
    },
    {
      anchorId: "dash.shipments",
      route: "dash",
      content: "We provide both ethical and unethical shipments globaally",
      title: "Route Return",
    },
    {
      anchorId: "notifications",
      route: "dash",
      content: "...then use it.",
      placement: "auto",
      title: "notifications",
    },
    {
      anchorId: "tourService.start",
      content: "Don't forget to actually start the tour.",
      placement: "auto",
      title: "Start the tour",
    },
    {
      anchorId: "config.anchorId",
      content: "Every step needs an anchor.",
      title: "Anchor",
    },
    {
      anchorId: "config.route",
      content: "Tours can span multiple routes. No placement.",
      title: "Route",
    },
    {
      anchorId: "config.containerClass",
      content: "You can add custom container class.",
      title: "Custom CSS Class",
      containerClass: "custom-tour-class",
    },
    {
      anchorId: "another.route",
      content: "Like this!",
      route: "ngx-bootstrap/other",
      title: "Another Route",
    },
    {
      anchorId: "config.route",
      content: "And then back again.",
      placement: "bottom",
      title: "Route Return",
    },
    {
      anchorId: "config.placement.default",
      content:
        "Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",
      title: "No Placement",
    },
    {
      anchorId: "config.placement.default",
      content: "Sliiide to the left.",
      placement: "left",
      title: "Left Placement",
    },
    {
      anchorId: "config.placement.default",
      content: "Sliiide to the right.",
      placement: "right",
      title: "Right Placement",
    },
    {
      anchorId: "config.placement.default",
      content: "Take it back now y'all.  One hop this time.",
      placement: "bottom",
      title: "Bottom Placement",
    },
    {
      anchorId: "config.buttons.custom",
      content: "You can set custom step button names",
      title: "Button Titles",
      prevBtnTitle: "My Prev",
      nextBtnTitle: "My Next",
      endBtnTitle: "My End",
    },
    {
      anchorId: "hotkeys",
      content: "Try using the hotkeys to navigate through the tour.",
      title: "Hotkeys",
    },
    {
      anchorId: "events",
      content: "You can subscribe to events",
      title: "Events",
    },
  ];

  public dashTourRoute: TSINgxRoute = {
    route: "dash",
  };

  constructor(public tourService: TourService, @Inject(DOCUMENT) private dom) {
    console.log('tourService', tourService);
  }

  ngOnInit() {
    this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
      console.log('tour configured with these steps:', steps);
    });

    this.tourService.initialize(this.dashSteps, this.dashTourRoute);

    

    this.tourService.start$.subscribe((step: IStepOption) => {
      console.log('tour start:', step);
    });

    this.tourService.end$.subscribe((step: any) => {
      console.log('tour end:', step);
    });

    this.tourService.stepShow$.subscribe((step: IStepOption) => {
      console.log('step shown:', step);
    });

    this.tourService.anchorRegister$.subscribe((anchor: string) => {
      console.log('anchor registered:', anchor);
    });

    this.tourService.anchorUnregister$.subscribe((sanchor: string) => {
      console.log('anchor unregistered:', sanchor);
    });

    this.tourService.start();
  }

  // TODO: leaving the component is destroying tourService initialisation casuing routes to fail
  /**
   * 1. remove steps away as they are used with some kind of hook
   * 2. create a higher level initialisation of the steps in app root
   * 3. preserve the tourService in some way...static class?....global state?
   */
  ngOnDestroy() {
    console.log('dash component destroyed - this might re-initialise tour...!')
  }
}

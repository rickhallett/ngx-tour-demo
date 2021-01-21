import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import * as faker from "faker";
import { IStepOption } from "ngx-tour-core";
import {
  BrowserLogger,
  BrowserLoggerService,
} from "../../../services/browser-logger.service";
import { StateService } from "../../../services/state-service";
// import { TSINgxStepOption } from '../../../tours/trump-tour';

export type Contact = {
  name: string;
  tel: string;
  ice: string;
  edit: boolean;
};

export const newContact = () => {
  return {
    name: `${faker.name.title()}. ${faker.name.firstName()} ${faker.name.lastName()}`,
    tel: faker.phone.phoneNumber().toString(),
    ice: faker.hacker.phrase(),
    edit: false,
  };
};

const newContacts = () => [newContact(), newContact(), newContact()];

@Component({
  selector: "app-trumps-rules",
  templateUrl: "./trumps-rules.component.html",
  styleUrls: ["./trumps-rules.component.css"],
})
export class TrumpsRulesComponent implements OnInit, AfterViewInit {
  private log: BrowserLogger;

  public form: FormGroup = new FormGroup({
    a: new FormControl(),
    b: new FormControl(),
  });

  public rules = [
    { rule: "No twitter", edit: false, contacts: newContacts() },
    { rule: "No office", edit: false, contacts: newContacts() },
    { rule: "No facebook", edit: false, contacts: newContacts() },
    { rule: "No friends", edit: false, contacts: newContacts() },
  ];

  public activeIndex: number = null;

  constructor(
    private browserLoggerService: BrowserLoggerService,
    private stateService: StateService
  ) {
    this.log = browserLoggerService.createLog("TrumpsRulesComponent", "orange");
  }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    this.log("ngOnDestroy");
    this.stateService.tour.end();
  }

  /**
   * BRAINSTORMING
   *
   * 1) extend a custom type for step options, include a property or function callback
   *
   * 2) hook into steps via subscribe, check for certain conditions
   *
   * 3) store the button needed for the next step, programmatically 'click' this ahead of the next step so it is available in the DOM.
   *
   * 4) on each 'next', restart the tour but jump back to this step + 1. Only viable if there is no UI jarring
   */

   async clickAsync(trigger) {
      return await trigger.click();
   }

  startTrumpTour(): void {
    this.log("startTrumpTour");
    this.stateService.tour.startAt(
      this.stateService.findAnchorById("start.trump.tour")
    );

    this.stateService.tour.start$.subscribe((step: IStepOption) => {});

    const events = this.stateService.tour.events$;
    events.subscribe((event) => {
      console.log(event.name, event.value);
    });

    // NB: this subscribe has next, error and complete callbacks available if neccessary
    this.stateService.tour.stepShow$.subscribe(async (step: IStepOption) => {
      console.log("next step:", step.nextStep);

      // guard against this observable firing before everything is initialised
      if (!step.nextStep) {
        console.error("no next step... exiting");
        return;
      }

      // is next el in DOM
      let nextTarget = document.getElementById(step.nextStep as string);

      if (nextTarget) {
        console.log("next target DOM is visible.", nextTarget);
        return;
      }

      if (!nextTarget) {
        // get the trigger
        const trigger = document.getElementById(step.nextStep + '.btn');
        if (!trigger) {
          console.log('no trigger found, exiting');
          return;
        }
        console.log("no next target, found button...", trigger);

        // fire the trigger
        console.log("clicking button...");
        trigger.click(); 
      }
    });

    this.stateService.tour.end$.subscribe(() => {
      const trumpSteps = this.stateService.tour.steps.filter(step => step.anchorId.includes('trump'));
      const trumpStepBtns = trumpSteps.map(step => step.anchorId + '.btn');

      trumpStepBtns.forEach(selector => {
        const btn = document.getElementById(selector);
        if (btn) {
          btn.click();
        }
      });
    });
  }

  onNewRule() {
    this.rules.push({ rule: "New rule", edit: false, contacts: newContacts() });
  }

  onSave() {}

  onCancel() {
    this.rules.map((r) => (r.edit = false));
  }

  onSubmit() {}
}

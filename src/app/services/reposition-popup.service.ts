import { Injectable, Inject, ElementRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { BrowserLoggerService, BrowserLogger } from "./browser-logger.service";
import { docsTourSteps } from "../tours/docs-tour";

/**
 * TODO: why does safari return negative top values for getBoundingClientRect?
 * This will force a browser checking condition if we are to include it
 */

//#region types

type SidesOffscreen = {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
  any: boolean;
  all: boolean;
};

type HorizantalOffset = {
  offScreen: boolean;
  left?: number;
  right?: number;
};

type VerticalOffset = {
  offScreen: boolean;
  top?: number;
  bottom?: number;
};

type PopupNode = {
  anchorId: string;
  classes: string[];
  elementRef: ElementRef;
  verticalOffset: VerticalOffset;
  horizantalOffset: HorizantalOffset;
  visible: boolean;
  boundingClientSideVisibility: SidesOffscreen;
};

//#endregion

@Injectable()
export class RepositionPopupService {
  private log: BrowserLogger;

  constructor(
    private browserLoggerService: BrowserLoggerService,
    @Inject(DOCUMENT) private dom
  ) {
    this.log = this.browserLoggerService.createLog(
      "RepositionPopupService",
      "yellow"
    );

    this.log("dom:", this.dom);
  }

  public getNode(): PopupNode {
    // NB: will there ever be more than one popup onscreen? If so, this will only capture the first.

    const nativeEl = this.dom.getElementsByTagName("popover-container")[0];
    if (!nativeEl) return;

    const verticalOffset = this.getVerticalOffset(nativeEl);
    const horizantalOffset = this.getHorizantalOffset(nativeEl);
    const boundingClientSideVisibility = this.getSideVisibilies(nativeEl);

    return {
      anchorId: this.getAnchorId(),
      classes: nativeEl.classList,
      elementRef: new ElementRef(nativeEl),
      verticalOffset,
      horizantalOffset,
      boundingClientSideVisibility,
      visible: this.isElementVisible(boundingClientSideVisibility),
    };
  }

  // TODO: if this is kept, it needs generalising for all tours, not just docs
  private getAnchorId(): string {
    const popupTitle = this.dom.getElementsByClassName("popover-title")[0]
      .innerHTML;
    const tourStep = docsTourSteps.find((step) => step.title === popupTitle);

    if (!tourStep)
      throw new Error(`No tour step was found for the node with ${popupTitle}`);

    return tourStep.anchorId;
  }

  private getVerticalOffset(el) {
    const bounding = el.getBoundingClientRect();

    if (bounding.top < 0) {
      return { offScreen: true, top: bounding.top };
    }

    if (
      bounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return { offScreen: true, bottom: bounding.bottom };
    }

    return { offScreen: false };
  }

  private getHorizantalOffset(el) {
    const bounding = el.getBoundingClientRect();

    if (bounding.left < 0) {
      return { offScreen: true, left: bounding.left };
    }

    if (
      bounding.right >
      (window.innerWidth || document.documentElement.clientWidth)
    ) {
      return { offScreen: true, right: bounding.right };
    }

    return { offScreen: false };
  }

  getSideVisibilies = (elem): SidesOffscreen => {
    // Get element's bounding
    const bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    let sides = {
      top: bounding.top < 0,
      left: bounding.left < 0,
      bottom: bounding.bottom > document.documentElement.clientHeight,
      right: bounding.right > document.documentElement.clientWidth,
    };

    return {
      ...sides,
      any: sides.top || sides.left || sides.bottom || sides.right,
      all: sides.top && sides.left && sides.bottom && sides.right,
    };
  };

  private isElementVisible(clientBoundings): boolean {
    if (clientBoundings.any) {
      this.log("Not in the viewport! =(");
      return false;
    } else {
      this.log("In the viewport! =)");
      return true;
    }
  }

  public scrollIntoViewIfNeeded() {
    const popup = this.getNode();
    if (!popup) return;

    this.log("popup found:", popup);

    if (popup.visible) {
      this.log("Popup already visible!");
      return;
    }

    this.log("BOYO ALERT");
    popup.elementRef.nativeElement.scrollIntoView({ behavior: "smooth" });

    // TODO: this needs to be sensitive to whether the offset needed is x/y axis
    const offset = 50;
    window.scroll({
      top: popup.elementRef.nativeElement.offsetTop - offset,
      left: 0,
      behavior: "smooth",
    });
  }
}

import {
  Injectable,
  RendererFactory2,
  Renderer2,
  Inject,
  ElementRef,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { BrowserLoggerService, BrowserLogger } from "./browser-logger.service";
import { appTourSteps } from "../tours/app-tour";

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
  offScreen: boolean,
  left?: number,
  right?: number
}

type VerticalOffset = {
  offScreen: boolean,
  top?: number,
  bottom?: number
}

type PopupNode = {
  anchorId: string;
  classes: string[];
  elementRef: ElementRef;
  verticalOffset: VerticalOffset
  horizantalOffset: HorizantalOffset;
  visible: boolean;
  boundingClientSideInvisible: SidesOffscreen;
};

//#endregion

//#region test objects

// offset test case 1
const topOffset: VerticalOffset = {
  offScreen: true,
  top: -200
};

// offset test case 2
const bottomOffset: VerticalOffset = {
  offScreen: true,
  bottom: 200
};

// offset test case 3
const leftOffset: HorizantalOffset = {
  offScreen: true,
  left: -200
};

// offset test case 4
const rightOffset: HorizantalOffset = {
  offScreen: true,
  right: 200
};

// offset test case 5
const noVerticalOffset: VerticalOffset = {
  offScreen: false
};

// offset test case 6
const noHorizantalOffset: HorizantalOffset = {
  offScreen: false
};

// offset test case 7
const halfLeftOffset: HorizantalOffset = {
  offScreen: true,
  left: -100
};

// offset test case 8
const halfRightOffset: HorizantalOffset = {
  offScreen: true,
  right: 100
};

// offset test case 9
const halfTopOffset: VerticalOffset = {
  offScreen: true,
  top: -100
};

// offset test case 10
const halfBottomOffset: VerticalOffset = {
  offScreen: true,
  top: 100
};

// test case 1
const visibleNode: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: true,
  boundingClientSideInvisible: {
    top: false,
    bottom: false,
    left: false,
    right: false,
    any: false, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 2
const nodeAboveViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: topOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 3
const nodeBelowViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: bottomOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 4
const nodeLeftOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: leftOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 5
const nodeRightOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: rightOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 6
const nodeHalfWayLeftOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: halfLeftOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: true,
    left: true,
    right: false,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 7
const nodeHalfWayRightOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: halfRightOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: true,
    left: false,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 8
const nodeHalfWayTopOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: halfTopOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: true,
    bottom: false,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 9
const nodeHalfWayBottomOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: halfBottomOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideInvisible: {
    top: false,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};
//#endregion

@Injectable()
export class RepositionPopupService {
  private renderer: Renderer2;
  private log: BrowserLogger;

  constructor(
    private rendererFactory: RendererFactory2,
    private browserLoggerService: BrowserLoggerService,
    @Inject(DOCUMENT) private dom
  ) {
    this.log = this.browserLoggerService.createLog(
      "RepositionPopupService",
      "yellow"
    );

    this.renderer = rendererFactory.createRenderer(null, null);
    this.log("renderer:", this.renderer);
    this.log("dom:", this.dom);
  }

  // BROWSER TEST POINT - do properties return consistently with user experience?

  public getNode(): PopupNode {
    const nativeEl = this.dom.getElementsByTagName("popover-container")[0];
    if (!nativeEl) return;

    const elemRect = nativeEl.getBoundingClientRect();
    const bodyRect = this.dom.body.getBoundingClientRect();
    const verticalOffset = this.getVerticalOffset(nativeEl);
    const horizantalOffset = this.getHorizantalOffset(nativeEl);

    return {
      anchorId: this.getAnchorId(),
      classes: nativeEl.classList,
      elementRef: new ElementRef(nativeEl),
      verticalOffset,
      horizantalOffset,
      boundingClientSideInvisible: this.getSideVisibilies(nativeEl),
      visible: this.isElementVisible(nativeEl),
    };
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

    if (bounding.right >
      (window.innerWidth || document.documentElement.clientWidth)) {
        return { offScreen: true, right: bounding.right }
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
      bottom:
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight),
      right:
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth),
    };

    return {
      ...sides,
      any: sides.top || sides.left || sides.bottom || sides.right,
      all: sides.top && sides.left && sides.bottom && sides.right,
    };
  };

  private isElementVisible(el): boolean {
    var isOut = this.getSideVisibilies(el);
    if (isOut.any) {
      this.log("Not in the viewport! =(");
      return false;
    } else {
      this.log("In the viewport! =)");
      return true;
    }
  }

  private getAnchorId(): string {
    const popupTitle = this.dom.getElementsByClassName("popover-title")[0]
      .innerHTML;
    const tourStep = appTourSteps.find((step) => step.title === popupTitle);

    if (!tourStep)
      throw new Error(`No tour step was found for the node with ${popupTitle}`);

    return tourStep.anchorId;
  }

  
}

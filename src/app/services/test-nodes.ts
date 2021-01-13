import { ElementRef } from "@angular/core";

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

//#region test objects

// offset test case 1
export const topOffset: VerticalOffset = {
  offScreen: true,
  top: -200,
};

// offset test case 2
export const bottomOffset: VerticalOffset = {
  offScreen: true,
  bottom: 200,
};

// offset test case 3
export const leftOffset: HorizantalOffset = {
  offScreen: true,
  left: -200,
};

// offset test case 4
export const rightOffset: HorizantalOffset = {
  offScreen: true,
  right: 200,
};

// offset test case 5
export const noVerticalOffset: VerticalOffset = {
  offScreen: false,
};

// offset test case 6
export const noHorizantalOffset: HorizantalOffset = {
  offScreen: false,
};

// offset test case 7
export const halfLeftOffset: HorizantalOffset = {
  offScreen: true,
  left: -100,
};

// offset test case 8
export const halfRightOffset: HorizantalOffset = {
  offScreen: true,
  right: 100,
};

// offset test case 9
export const halfTopOffset: VerticalOffset = {
  offScreen: true,
  top: -100,
};

// offset test case 10
export const halfBottomOffset: VerticalOffset = {
  offScreen: true,
  top: 100,
};

// test case 1
export const visibleNode: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: true,
  boundingClientSideVisibility: {
    top: false,
    bottom: false,
    left: false,
    right: false,
    any: false, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 2
export const nodeAboveViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: topOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 3
export const nodeBelowViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: bottomOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 4
export const nodeLeftOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: leftOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 5
export const nodeRightOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: rightOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: true, // acid test for being completely off screen
  },
};

// test case 6
export const nodeHalfWayLeftOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: halfLeftOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: true,
    left: true,
    right: false,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 7
export const nodeHalfWayRightOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: noVerticalOffset, // distance to move node on y axis
  horizantalOffset: halfRightOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: true,
    left: false,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 8
export const nodeHalfWayTopOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: halfTopOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: true,
    bottom: false,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};

// test case 9
export const nodeHalfWayBottomOfViewport: PopupNode = {
  anchorId: "docs.start",
  classes: ["popover-container", "popover-header"],
  elementRef: new ElementRef(null),
  verticalOffset: halfBottomOffset, // distance to move node on y axis
  horizantalOffset: noHorizantalOffset, // distance to move node on x axis
  visible: false,
  boundingClientSideVisibility: {
    top: false,
    bottom: true,
    left: true,
    right: true,
    any: true, // acid test for finding which Side and moving
    all: false, // acid test for being completely off screen
  },
};
//#endregion

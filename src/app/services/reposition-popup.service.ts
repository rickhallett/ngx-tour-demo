import { Injectable, RendererFactory2, Renderer2, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BrowserLoggerService, BrowserLogger } from './browser-logger.service';
import { appTourSteps } from '../tours/app-tour';

/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 */
const isOutOfViewport = function (elem) {

  // Get element's bounding
  var bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  var out = { top: null, left: null, bottom: null, right: null, any: null, all: null };
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;

  return out;

};

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

type Position = {
  x: number,
  y: number
}

type PopupNode = {
  anchorId: string,
  classes: string[],
  // TODO: is there any advantage to wrapping this?
  elementRef?: ElementRef,
  elemRect: DOMRect,
  bodyRect: DOMRect,
  verticalOffset: number,
  horizantalOffset: number,
  isElementVisible: boolean
}

type Viewport = {
  x: number;
  y: number;
}

type PageSize = {
  x: number;
  y: number;
}

type Browsers = {
  safari: Viewport,
  chrome: Viewport,
  firefox: Viewport
}

const topLeft: Position = {
  x: 0,
  y: 0
}

const defaultNode: PopupNode = {
  anchorId: 'anchor-id',
  classes: ['btn', 'btn-primary'],
  elementRef: new ElementRef(null),
  elemRect: new DOMRect(0, 0),
  bodyRect: new DOMRect(0, 0),
  verticalOffset: 0,
  horizantalOffset: 0,
  isElementVisible: true
}

// NB: it doesn't matter if different browsers render slightly differently - just use a relative unit
// const googleHomepage: Browsers = {
//   safari: { x: 1976, y: 1169 },
//   chrome: { x: 0, y: 0},
//   firefox: { x: 2128, y: 1169 },
// }

@Injectable()
export class RepositionPopupService {
  private renderer: Renderer2;
  private log: BrowserLogger;

  constructor(private rendererFactory: RendererFactory2, private browserLoggerService: BrowserLoggerService, @Inject(DOCUMENT) private dom) {

    /**
     * RepositionService is required as ngx-tour requires ngx-bootstrap@6 in order to auto-scroll to popups created off the screen position
     *  
     * Must:
     *  Ensure tour steps are scrolled to.
     *  Check for nodes on each view update
     * 
     * 
     * Should:
     * 
     * 
     * Could:
     *  Hook into each component creation at the level of the module (injection?), rather than re-stating in each component
     *  Apply CSS classes that will need to be available globally, either at app or component creation
     *  Have a few basic tests that help flag any future issues when upgrading angular, ngx-bootstrap or ngx-tour
     * 
     * 
     * Won't:
     *  Take me forever
     * 
     * 
     * Unknowns:
     *  Does ngx-tour protect against elements rendering off page (i.e. left: -200px;)?
     * 
     */

    this.log = this.browserLoggerService.createLog('RepositionPopupService', 'yellow');

    this.renderer = rendererFactory.createRenderer(null, null);
    this.log('renderer:', this.renderer);
    this.log('dom:', this.dom);

    const domProps = [];
    for (let name in this.dom) domProps.push(name);

    this.log('dom properties:', domProps);
  }

  public checkNodePosition(): Position {
    return topLeft;
  }

  // NB - as this is being called by ngAfterViewChecked, we need to guard for nativeEl being undefined
  // before the component is initialised
  public getNode(): PopupNode {
    const nativeEl = this.dom.getElementsByTagName('popover-container')[0];
    if (!nativeEl) return;

    const elemRect = nativeEl.getBoundingClientRect();
    const bodyRect = this.dom.body.getBoundingClientRect()
    const verticalOffset = bodyRect.top - elemRect.top;
    const horizantalOffset = bodyRect.left - elemRect.left;

    if (verticalOffset < 0) {

    }

    if (horizantalOffset) {

    }

    return {
      anchorId: this.getAnchorId(),
      classes: nativeEl.classList,
      elementRef: new ElementRef(nativeEl),
      elemRect: elemRect,
      bodyRect,
      verticalOffset,
      horizantalOffset,
      isElementVisible: this.isElementVisible(nativeEl)
    }
  }

  /**
   *  /docs top
   * 
   * rect
      DOMRect

      bottom: -452.26097106933594

      height: 123.27204895019531

      left: 0

      right: 250.25733947753906

      top: -575.5330200195312

      width: 250.25733947753906

      x: 0

      y: -575.5330200195312
   */

  private isElementVisible(el) {
    var isOut = isOutOfViewport(el);
    if (isOut.any) {
      console.log('Not in the viewport! =(');
    } else {
      console.log('In the viewport! =)');
    }
  }

  // private isElementVisible(el) {
  //   const rect = el.getBoundingClientRect();
  //   console.log("🚀 ~ file: reposition-popup.service.ts ~ line 174 ~ RepositionPopupService ~ isElementVisible ~ rect", rect)
  //   const vWidth = window.innerWidth || this.dom.documentElement.clientWidth;
  //   console.log("🚀 ~ file: reposition-popup.service.ts ~ line 176 ~ RepositionPopupService ~ isElementVisible ~ vWidth", vWidth)
  //   const vHeight = window.innerHeight || this.dom.documentElement.clientHeight;
  //   console.log("🚀 ~ file: reposition-popup.service.ts ~ line 178 ~ RepositionPopupService ~ isElementVisible ~ vHeight", vHeight)
  //   const efp = function (x, y) { return document.elementFromPoint(x, y) };
  //   console.log("🚀 ~ file: reposition-popup.service.ts ~ line 180 ~ RepositionPopupService ~ isElementVisible ~ efp", efp)

  //   console.log(el)

  //   console.log(document.elementFromPoint(0, 0))

  //   console.log(el.contains(efp(rect.left, rect.top)))
  //   console.log(efp(rect.left, rect.top))
  //   console.log(el.contains(efp(rect.right, rect.top)));
  //   console.log(efp(rect.right, rect.top));
  //   console.log(el.contains(efp(rect.right, rect.bottom)));
  //   console.log(efp(rect.right, rect.bottom));
  //   console.log(el.contains(efp(rect.left, rect.bottom)));
  //   console.log(efp(rect.left, rect.bottom));

  //   // Return false if it's not in the viewport
  //   if (rect.right < 0 || rect.bottom < 0
  //     || rect.left > vWidth || rect.top > vHeight)
  //     return false;

  //   // Return true if any of its four corners are visible
  //   return (
  //     el.contains(efp(rect.left, rect.top))
  //     || el.contains(efp(rect.right, rect.top))
  //     || el.contains(efp(rect.right, rect.bottom))
  //     || el.contains(efp(rect.left, rect.bottom))
  //   );
  // }

  private getAnchorId(): string {
    const popupTitle = this.dom.getElementsByClassName('popover-title')[0].innerHTML;
    const tourStep = appTourSteps.find((step) => step.title === popupTitle);

    if (!tourStep) throw new Error(`No tour step was found for the node with ${popupTitle}`);

    return tourStep.anchorId;
  }

  private getNodeAbsolutePosition() {

  }

  private moveNodeIntoViewport(): Position {
    return topLeft;
  }

  private moveNode(direction: Direction) {
    return topLeft;
  }

  private scrollToNode() {

  }

  private getViewportSize() {

  }

}

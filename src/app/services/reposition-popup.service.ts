import { Injectable, RendererFactory2, Renderer2, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  nativeElement?: ElementRef
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
  nativeElement: new ElementRef(null)
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

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private dom) {

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

    console.log('RepositionPopupService constructor');
    this.renderer = rendererFactory.createRenderer(null, null);
    console.log('RepositionPopupService dom:', this.dom);

    const domProps = [];
    for (let name in this.dom) domProps.push(name);
    console.log('dom properties:', domProps);
  }

  public checkNodePosition(): Position {
    return topLeft;
  }

  private getNode(): PopupNode {
    return defaultNode;
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

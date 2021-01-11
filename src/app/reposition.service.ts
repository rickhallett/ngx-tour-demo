import { Injectable, Renderer2, Inject, ElementRef } from '@angular/core';
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

type Node = {
  anchorId: string,
  classes: string[],
  nativeElement: ElementRef
}

@Injectable()
export class RepositionService {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private dom) {

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

  }

  public checkNodePosition(): Position {
    return { x: 0, y: 0 };
  }

  private getNode() {

  }

  private getNodeAbsolutePosition() {

  }

  private moveNodeIntoViewport() {

  }

  private moveNode(direction: Direction) {

  }

  private scrollToNode() {

  }

  private getViewportSize() {

  }

}

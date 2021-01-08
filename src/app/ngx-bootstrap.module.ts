import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';

import { NgxDocsComponent } from './ngx-docs/ngx-docs.component';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';
// import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgxBootstrapComponent, NgxDocsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: NgxBootstrapComponent,
      path: 'ngx-bootstrap',
      children: [{
        component: NgxDocsComponent,
        path: '',
      }, 
    //   {
    //     component: OtherRouteComponent,
    //     path: 'other',
    //   }
    ]
    }]),
    TourNgxBootstrapModule.forRoot(),
  ],
})
export class NgxBootstrapModule { }

/**
 * Type PopoverContainerComponent in /Users/kaishin/dev/ts/universal-paperclips/node_modules/ngx-bootstrap/popover/popover-container.component.d.ts 
 * 
 * is part of the declarations of 2 modules: 
 * 
 * PopoverModule in /Users/kaishin/dev/ts/universal-paperclips/node_modules/ngx-bootstrap/popover/popover.module.d.ts 
 * 
 * and AppModule in /Users/kaishin/dev/ts/universal-paperclips/src/app/app.module.ts! 
 * 
 * Please consider moving PopoverContainerComponent in /Users/kaishin/dev/ts/universal-paperclips/node_modules/ngx-bootstrap/popover/popover-container.component.d.ts to a higher module 
 * 
 * that imports PopoverModule in /Users/kaishin/dev/ts/universal-paperclips/node_modules/ngx-bootstrap/popover/popover.module.d.ts 
 * 
 * and AppModule in /Users/kaishin/dev/ts/universal-paperclips/src/app/app.module.ts. 
 * 
 * You can also create a new NgModule that exports and includes PopoverContainerComponent in /Users/kaishin/dev/ts/universal-paperclips/node_modules/ngx-bootstrap/popover/popover-container.component.d.ts then import that NgModule 
 * 
 * in PopoverModule in /Users/kaishin/dev/ts/universal-paperclips/node_modules/ngx-bootstrap/popover/popover.module.d.ts and AppModule in /Users/kaishin/dev/ts/universal-paperclips/src/app/app.module.ts.
 */
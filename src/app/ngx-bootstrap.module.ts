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
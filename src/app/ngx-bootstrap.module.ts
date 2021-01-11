import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';

import { NgxDocsComponent } from './ngx-docs/ngx-docs.component';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';

// TODO: merge into app.module
@NgModule({
  declarations: [NgxBootstrapComponent, NgxDocsComponent],
  imports: [
    CommonModule,
    TourNgxBootstrapModule.forRoot(),
  ],
})
export class NgxBootstrapModule { }
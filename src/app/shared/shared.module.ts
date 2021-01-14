import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourNgxBootstrapModule, TourService } from 'ngx-tour-ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TourNgxBootstrapModule
  ],
  providers: [TourService],
  declarations: []
})
export class SharedModule { }

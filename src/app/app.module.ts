import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { TourNgxBootstrapModule } from "ngx-tour-ngx-bootstrap";
import { PopoverModule, PopoverConfig, ComponentLoaderFactory, PositioningService } from "ngx-bootstrap";
import { NgxBootstrapModule } from './ngx-bootstrap.module';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { Router } from "@angular/router";
import { ChartComponent } from "./chart/chart.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashComponent } from "./dash/dash.component";
import { OrdersComponent } from "./order/order.component";
import { ProductsComponent } from "./product/product.component";
import { CustomersComponent } from "./customer/customer.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PricingComponent } from "./pricing/pricing.component";
import { AlbumComponent } from "./album/album.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CoverComponent } from "./cover/cover.component";
import { BlogComponent } from "./blog/blog.component";
import { NgxBootstrapComponent } from "./ngx-bootstrap/ngx-bootstrap.component";
import { NgxDocsComponent } from "./ngx-docs/ngx-docs.component";

import { RepositionPopupService } from "./reposition-popup.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SimpleFormComponent,
    ChartComponent,
    NavbarComponent,
    DashComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    NotFoundComponent,
    PricingComponent,
    AlbumComponent,
    CheckoutComponent,
    CoverComponent,
    BlogComponent,
    // NgxDocsComponent, // TODO: bring library module into here
    // NgxBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    PopoverModule,
    TourNgxBootstrapModule.forRoot(),
  ],
  providers: [
    PopoverConfig,
    ComponentLoaderFactory,
    PositioningService,
    RepositionPopupService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, null, 8));
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { TourNgxBootstrapModule } from "ngx-tour-ngx-bootstrap";
import {
  PopoverModule,
  PopoverConfig,
  ComponentLoaderFactory,
  PositioningService,
} from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SimpleFormComponent } from "./components/simple-form/simple-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { Router } from "@angular/router";
import { ChartComponent } from "./components/chart/chart.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashComponent } from "./components/dash/dash.component";
import { OrdersComponent } from "./components/order/order.component";
import { ProductsComponent } from "./components/product/product.component";
import { CustomersComponent } from "./components/customer/customer.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { AlbumComponent } from "./components/album/album.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CoverComponent } from "./components/cover/cover.component";
import { BlogComponent } from "./components/blog/blog.component";
import { NgxBootstrapComponent } from "./components/ngx-bootstrap/ngx-bootstrap.component";
import { NgxDocsComponent } from "./components/ngx-docs/ngx-docs.component";

import { RepositionPopupService } from "./services/reposition-popup.service";
import { BrowserLoggerService } from "./services/browser-logger.service";
import { TourService } from "ngx-tour-core";

// TECH-SUPPORT: attempted to provide a high level factory to NgModule. Nope.
const tourServiceFactory = (router: Router) => {
  return new TourService(router);
};

let tourServiceProvider = {
  provide: TourService,
  useFactory: tourServiceFactory,
  deps: [Router],
};

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
    NgxDocsComponent,
    NgxBootstrapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PopoverModule,

    // TECH-SUPPORT: providing here, and instantiating in a component constructor is so far
    // the only way I have got this to work.
    TourNgxBootstrapModule.forRoot(),
  ],
  providers: [
    PopoverConfig,
    ComponentLoaderFactory,
    PositioningService,
    RepositionPopupService,
    BrowserLoggerService,
    tourServiceProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, null, 8));
  }
}

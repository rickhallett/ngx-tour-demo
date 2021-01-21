import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

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
import { AppRoutingModule } from "./app-routing.module";
import { ChartComponent } from "./components/chart/chart.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashComponent } from "./components/dash/dash.component";
import { OrdersComponent } from "./components/order/order.component";
import { CustomersComponent } from "./components/customer/customer.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { AlbumComponent } from "./components/album/album.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { BlogComponent } from "./components/blog/blog.component";
import { NgxDocsComponent } from "./components/ngx-docs/ngx-docs.component";

import { RepositionPopupService } from "./services/reposition-popup.service";
import { BrowserLoggerService } from "./services/browser-logger.service";
import { StateService } from "./services/state-service";
import { TrumpAlertsComponent } from './components/trump-detection/trump-alerts/trump-alerts.component';
import { TrumpBrowserComponent } from './components/trump-detection/trump-browser/trump-browser.component';
import { KeyCodesComponent } from './components/trump-detection/key-codes/key-codes.component';
import { TrumpsRulesComponent } from './components/trump-detection/trumps-rules/trumps-rules.component';
import { TrumpDetectionComponent } from "./components/trump-detection/trump-detection.component";
import { TrumpsRulesItemComponent } from './components/trump-detection/trumps-rules/rule-item/rules-item.component';
import { TrumpsRulesItemContactsComponent } from './components/trump-detection/trumps-rules/rule-contacts/rule-contacts.component';
import { TrumpsRulesItemContactsItemComponent } from './components/trump-detection/trumps-rules/rule-contact/rule-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ChartComponent,
    NavbarComponent,
    DashComponent,
    OrdersComponent,
    CustomersComponent,
    NotFoundComponent,
    PricingComponent,
    AlbumComponent,
    CheckoutComponent,
    BlogComponent,
    NgxDocsComponent,
    TrumpDetectionComponent,
    TrumpAlertsComponent,
    TrumpBrowserComponent,
    TrumpBrowserComponent,
    KeyCodesComponent,
    TrumpsRulesComponent,
    TrumpsRulesItemComponent,
    TrumpsRulesItemContactsComponent,
    TrumpsRulesItemContactsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PopoverModule,
    TourNgxBootstrapModule.forRoot(),
  ],
  providers: [
    PopoverConfig,
    ComponentLoaderFactory,
    PositioningService,
    RepositionPopupService,
    BrowserLoggerService,
    StateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    // console.log("Routes: ", JSON.stringify(router.config, null, 8));
  }
}

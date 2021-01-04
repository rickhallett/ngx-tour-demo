import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { Router } from "@angular/router";
import { ChartComponent } from "./chart/chart.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashComponent } from "./dash/dash.component";
import { OrdersComponent } from "./order/order.component";
import { ProductsComponent } from "./product/product.component";
import { CustomersComponent } from "./customer/customer.component";
import { IntegrationsComponent } from "./integration/integration.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReportsComponent } from "./reports/reports.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    ChartComponent,
    NavbarComponent,
    DashComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    IntegrationsComponent,
    NotFoundComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    // console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { AlbumComponent } from './album/album.component';
import { AppComponent } from "./app.component";
import { ChartComponent } from "./chart/chart.component";
import { CheckoutComponent } from './checkout/checkout.component';
import { ComplexFormComponent } from "./complex-form/complex-form.component";
import { CoverComponent } from './cover/cover.component';
import { CustomersComponent } from "./customer/customer.component";
import { DashComponent } from "./dash/dash.component";
import { IntegrationsComponent } from "./integration/integration.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrdersComponent } from "./order/order.component";
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from "./product/product.component";
import { ReportsComponent } from "./reports/reports.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "chart",
        component: ChartComponent,
      },
      {
        path: "simple-form",
        component: SimpleFormComponent,
      },
      {
        path: "complex-form",
        component: ComplexFormComponent,
      },
      {
        path: "dash",
        component: DashComponent,
      },
      {
        path: "orders",
        component: OrdersComponent,
      },
      {
        path: "products",
        component: ProductsComponent,
      },
      {
        path: "customers",
        component: CustomersComponent,
      },
      {
        path: "reports",
        component: ReportsComponent,
      },
      {
        path: "integrations",
        component: IntegrationsComponent,
      },
      {
        path: "albums",
        component: AlbumComponent,
      },
      {
        path: "pricing",
        component: PricingComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      }
    ],
  },
  {
    path: "cover",
    component: CoverComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

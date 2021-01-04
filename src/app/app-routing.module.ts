import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { AppComponent } from "./app.component";
import { ChartComponent } from "./chart/chart.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";
import { CustomersComponent } from "./customer/customer.component";
import { DashComponent } from "./dash/dash.component";
import { IntegrationsComponent } from "./integration/integration.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrdersComponent } from "./order/order.component";
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
    ],
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

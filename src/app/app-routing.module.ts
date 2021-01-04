import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { AlbumComponent } from "./album/album.component";
import { BlogComponent } from "./blog/blog.component";
import { ChartComponent } from "./chart/chart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CustomersComponent } from "./customer/customer.component";
import { DashComponent } from "./dash/dash.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrdersComponent } from "./order/order.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ProductsComponent } from "./product/product.component";

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
      },
      {
        path: "blog",
        component: BlogComponent,
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

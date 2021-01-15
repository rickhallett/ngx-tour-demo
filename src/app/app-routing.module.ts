import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AlbumComponent } from "./components/album/album.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ChartComponent } from "./components/chart/chart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CustomersComponent } from "./components/customer/customer.component";
import { DashComponent } from "./components/dash/dash.component";
import { NgxBootstrapComponent } from "./components/ngx-bootstrap/ngx-bootstrap.component";
import { NgxDocsComponent } from "./components/ngx-docs/ngx-docs.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { OrdersComponent } from "./components/order/order.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ProductsComponent } from "./components/product/product.component";

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
      {
        path: "docs",
        component: NgxDocsComponent,
      },
      // {
      //   path: "ngx-bootstrap",
      //   component: NgxBootstrapComponent,
      //   // children: [
      //   //   {
      //   //     path: "",
      //   //     component: NgxDocsComponent
      //   //   }
      //   // ]
      // },
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

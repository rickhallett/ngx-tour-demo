import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { HomeComponent } from "../app/home/home.component";
import { AppComponent } from "./app.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";
import { ContentComponent } from "./content/content.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
  },
  {
    path: "simple-form",
    component: SimpleFormComponent,
  },
  {
    path: "complex-form",
    component: ComplexFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

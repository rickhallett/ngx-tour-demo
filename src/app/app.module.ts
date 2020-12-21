import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

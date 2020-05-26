import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './admin/example/example.component';
import { DefaultComponent } from './admin/default/default.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DefaultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

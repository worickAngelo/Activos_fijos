import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivosComponent } from './activos/activos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddActivosComponent } from './add-activos/add-activos.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivosComponent,
    AddActivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

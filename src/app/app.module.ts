import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivosComponent } from './Components/Activos-Fijos/view-activos/view-activos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddActivosComponent } from './Components/Activos-Fijos/add-activos/add-activos.component';
import { ViewEmpleadosComponent } from './Components/Empleados/view-empleados/view-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReutilizablesComponent } from './Components/reutilizables/reutilizables.component';
import { TablaComponent } from './Components/Reutilizables/tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivosComponent,
    AddActivosComponent,
    ViewEmpleadosComponent,
    ReutilizablesComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

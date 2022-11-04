import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivosComponent } from './Components/Activos-Fijos/view-activos/view-activos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddActivosComponent } from './Components/Activos-Fijos/add-activos/add-activos.component';
import { ViewEmpleadosComponent } from './Components/Empleados/view-empleados/view-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './Components/Reutilizables/Tabla/tabla.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    ActivosComponent,
    AddActivosComponent,
    ViewEmpleadosComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

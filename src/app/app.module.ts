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
import { AddEmpleadoComponent } from './Components/Empleados/add-empleado/add-empleado.component';
import { ViewCalculoDepreciacionComponent } from './Components/CalculoDepreciacion/view-calculo-depreciacion/view-calculo-depreciacion.component';
import { AddCalculoDepreciacionComponent } from './Components/CalculoDepreciacion/add-calculo-depreciacion/add-calculo-depreciacion.component';
import { ViewCuentasComponent } from './Components/Cuentas/view-cuentas/view-cuentas.component';
import { AddCuentasComponent } from './Components/Cuentas/add-cuentas/add-cuentas.component';
import { ViewDepartamentosComponent } from './Components/Departamentos/view-departamentos/view-departamentos.component';
import { AddDepartamentosComponent } from './Components/Departamentos/add-departamentos/add-departamentos.component';
import { ViewTipoActivosComponent } from './Components/TipoActivos/view-tipo-activos/view-tipo-activos.component';
import { AddTipoActivosComponent } from './Components/TipoActivos/add-tipo-activos/add-tipo-activos.component';
import { ViewTiposPersonasComponent } from './Components/TipoPersonas/view-tipos-personas/view-tipos-personas.component';
import { AddTiposPersonasComponent } from './Components/TipoPersonas/add-tipos-personas/add-tipos-personas.component';



@NgModule({
  declarations: [
    AppComponent,
    ActivosComponent,
    AddActivosComponent,
    ViewEmpleadosComponent,
    TablaComponent,
    AddEmpleadoComponent,
    ViewCalculoDepreciacionComponent,
    AddCalculoDepreciacionComponent,
    ViewCuentasComponent,
    AddCuentasComponent,
    ViewDepartamentosComponent,
    AddDepartamentosComponent,
    ViewTipoActivosComponent,
    AddTipoActivosComponent,
    ViewTiposPersonasComponent,
    AddTiposPersonasComponent,
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

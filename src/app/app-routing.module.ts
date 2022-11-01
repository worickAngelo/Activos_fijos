import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar la ruta de  los componentes
import { ActivosComponent } from './Components/Activos-Fijos/view-activos/view-activos.component';
import { AddActivosComponent } from './Components/Activos-Fijos/add-activos/add-activos.component';
import { ViewEmpleadosComponent } from './Components/Empleados/view-empleados/view-empleados.component';

const routes: Routes = [
  {path: 'activos', component: ActivosComponent},
  {path: 'empleados', component: ViewEmpleadosComponent},
  {path: 'AddActivos', component: AddActivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

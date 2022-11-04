import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar la ruta de  los componentes
import { ActivosComponent } from './Components/Activos-Fijos/view-activos/view-activos.component';
import { ViewEmpleadosComponent } from './Components/Empleados/view-empleados/view-empleados.component';
import { ViewCalculoDepreciacionComponent } from './Components/CalculoDepreciacion/view-calculo-depreciacion/view-calculo-depreciacion.component';

const routes: Routes = [
  {path: 'activos', component: ActivosComponent},
  {path: 'empleados', component: ViewEmpleadosComponent},
  {path: 'depreciacion', component: ViewCalculoDepreciacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

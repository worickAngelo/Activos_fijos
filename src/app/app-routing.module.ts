import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar la ruta de  los componentes
import { ActivosComponent } from './Components/Activos-Fijos/view-activos/view-activos.component';
import { ViewEmpleadosComponent } from './Components/Empleados/view-empleados/view-empleados.component';
import { ViewCalculoDepreciacionComponent } from './Components/CalculoDepreciacion/view-calculo-depreciacion/view-calculo-depreciacion.component';
import { ViewCuentasComponent } from './Components/Cuentas/view-cuentas/view-cuentas.component';

const routes: Routes = [
  {path: 'activos', component: ActivosComponent},
  {path: 'empleados', component: ViewEmpleadosComponent},
  {path: 'depreciacion', component: ViewCalculoDepreciacionComponent},
  {path: 'cuentas', component: ViewCuentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

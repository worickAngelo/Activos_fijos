import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar la ruta de  los componentes
import { ActivosComponent } from './activos/activos.component';
import { AddActivosComponent } from './add-activos/add-activos.component';

const routes: Routes = [
  {path: 'activos', component: ActivosComponent},
  {path: 'AddActivos', component: AddActivosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

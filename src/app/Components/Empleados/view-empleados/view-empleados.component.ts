import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../model/Empleados';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../../Services/empleados.service';
import { global } from '../../../Services/Global';

@Component({
  selector: 'app-view-empleados',
  templateUrl: './view-empleados.component.html',
  styleUrls: ['./view-empleados.component.css'],
  providers: [EmpleadosService]
})
export class ViewEmpleadosComponent implements OnInit {
  public url: any;
  public empleados: Array<Empleado>;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _empleadoService: EmpleadosService
  ) {
    this.empleados = [];
    this.url = global.url;
   }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(
      res => {
        if (res.dataList
        ) {
          this.empleados = res.dataList
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}

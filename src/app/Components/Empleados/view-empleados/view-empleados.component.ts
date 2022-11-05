import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../../model/Empleados';
import { EmpleadosService } from '../../../Services/empleados.service';
import { global } from '../../../Services/Global';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { AddEmpleadoComponent } from '../add-empleado/add-empleado.component';


@Component({
  selector: 'app-view-empleados',
  templateUrl: './view-empleados.component.html',
  styleUrls: ['./view-empleados.component.css'],
  providers: [EmpleadosService]
})
export class ViewEmpleadosComponent implements OnInit {
  public url: any;
  public empleados: Array<Empleado>;
  public empleado: Empleado;
  @ViewChild(AddEmpleadoComponent) addmodal: AddEmpleadoComponent;
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

  CreateMode() {
    this.addmodal.inView = false;
    this.addmodal.inEdit = false;
    this.addmodal.form.enable();
    this.addmodal.Clear();
  }
  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe({
      next: (res) => {
        if (res.dataList
        ) {
          this.empleados = res.dataList
          console.log(res.dataList)
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  delete(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this._empleadoService.deleteEmpleados(id).subscribe({
          next:(res)=>{
            this.getEmpleados();
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'Este registro fue eliminado correctamente!',
              'success'
            )
          },
          error:(err)=>{
            console.log(err);
          }
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Accion cancelada',
          'error'
        )
      }
    })


  }
  getEmpleadosById(id:number,mode:number) {
    this._empleadoService.getEmpleados().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.empleado = res.dataList.find((x:any)=> x.empleadoId == id)
            this.addmodal.form.patchValue({
              ...this.empleado, fechaIngreso: formatDate(this.empleado.fechaIngreso,'yyyy-MM-dd','en')   
            });
          if(mode == 2){
            this.addmodal.form.disable();
            this.addmodal.inView=true;
            this.addmodal.inEdit=false;

          }else{
            this.addmodal.inView=false;
            this.addmodal.inEdit=true;
            this.addmodal.form.enable();
          }

        }
      },
      error:(err)=>{
        console.log(err);
      }
  })
  }
}


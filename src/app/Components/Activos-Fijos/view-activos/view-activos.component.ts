import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivosFijosService } from '../../../Services/activos-fijos.service';
import { ActivosFijo } from '../../../model/ActivoFijo';
import { global } from '../../../Services/Global';
import Swal from 'sweetalert2';
import { AddActivosComponent } from '../add-activos/add-activos.component';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-activos',
  templateUrl: './view-activos.component.html',
  styleUrls: ['./view-activos.component.css'],
  providers: [ActivosFijosService]
})
export class ActivosComponent implements OnInit {

  public url: any;
  public activos: Array<ActivosFijo>;
  public activo: ActivosFijo;
  @ViewChild(AddActivosComponent) addmodal: AddActivosComponent;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _activosService: ActivosFijosService
  ) {
    this.url = global.url;
  }
  ngOnInit(): void {
    this.getActivos();
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
        
        this._activosService.deleteActivos(id).subscribe({
          next:(res)=>{
            this.getActivos();
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

  getActivos() {
    this._activosService.getActivos().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.activos = res.dataList
        }
      },
      error:(err)=>{
        console.log(err);
      }
  })
  }

  CreateMode(){ 
    this.addmodal.inView=false;
    this.addmodal.inEdit=false;
    this.addmodal.form.enable();
    this.addmodal.Clear();
  }

  getActivoById(id:number,mode:number) {
    this._activosService.getActivos().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.activo = res.dataList.find((x:any)=> x.activoFijoId == id)
            this.addmodal.form.patchValue({
              ...this.activo, fechaRegistro: formatDate(this.activo.fechaRegistro,'yyyy-MM-dd','en')            
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

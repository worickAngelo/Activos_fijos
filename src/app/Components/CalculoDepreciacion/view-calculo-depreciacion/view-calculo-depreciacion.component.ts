import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculoDepreciacionService } from '../../../Services/calculo-depreciacion.service';
import { CalculoDepreciacion } from '../../../model/CalculoDepreciacion';
import { global } from '../../../Services/Global';
import Swal from 'sweetalert2';
import { AddCalculoDepreciacionComponent } from '../../CalculoDepreciacion/add-calculo-depreciacion/add-calculo-depreciacion.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-view-calculo-depreciacion',
  templateUrl: './view-calculo-depreciacion.component.html',
  styleUrls: ['./view-calculo-depreciacion.component.css'],
  providers: [CalculoDepreciacionService]
})
export class ViewCalculoDepreciacionComponent implements OnInit {

  public url: any;
  public depreciacion: CalculoDepreciacion;
  public depreciacions: Array<CalculoDepreciacion>;
  @ViewChild(AddCalculoDepreciacionComponent) addmodal: AddCalculoDepreciacionComponent;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _depreciacionService: CalculoDepreciacionService
  ) {     this.depreciacions = []}

  ngOnInit(): void {
    this.url = global.url;
    this.getDepreciacion();
  }

  delete(calculoDepreciacionId:number){
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

        this._depreciacionService.deleteCalculoDepreciacion(calculoDepreciacionId).subscribe({
          next:(res)=>{
            this.getDepreciacion();
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
  getDepreciacion() {
    this._depreciacionService.getCalculoDepreciacion().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.depreciacions = res.dataList
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

  getDepreciacionByid(id:number,mode:number) {
    this._depreciacionService.getCalculoDepreciacion().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.depreciacion = res.dataList.find((x:any)=> x.activoFijoId == id)
            this.addmodal.form.patchValue({
              ...this.depreciacion, fechaRegistro: formatDate(this.depreciacion.fechaProceso,'yyyy-MM-dd','en')
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

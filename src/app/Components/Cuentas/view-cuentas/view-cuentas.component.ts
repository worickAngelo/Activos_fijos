import { Component, OnInit, ViewChild,DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentasService } from '../../../Services/cuentas.service';
import { Cuenta } from '../../../model/Cuentas';
import { global } from '../../../Services/Global';
import Swal from 'sweetalert2';
import { AddCuentasComponent } from '../add-cuentas/add-cuentas.component';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-view-cuentas',
  templateUrl: './view-cuentas.component.html',
  styleUrls: ['./view-cuentas.component.css'],
  providers: [CuentasService]
})
export class ViewCuentasComponent implements OnInit {

  public url: any;
  public cuentas: Array<Cuenta>;
  public cuenta: Cuenta;
  @ViewChild(AddCuentasComponent) addmodal: AddCuentasComponent;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _cuentaService: CuentasService
  ) {
    this.url = global.url;
   }

  ngOnInit(): void {
    this.getCuentas();
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

        this._cuentaService.deleteCuentas(id).subscribe({
          next:(res)=>{
            this.getCuentas();
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



  getCuentas() {
    this._cuentaService.getCuentas().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.cuentas = res.dataList
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

  getCuentasById(id:number,mode:number) {
    this._cuentaService.getCuentas().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.cuenta = res.dataList.find((x:any)=> x.cuentaId == id)
            this.addmodal.form.patchValue({
              ...this.cuenta,
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoActivo } from 'src/app/model/TipoActivos';
import { TipoActivoService } from 'src/app/Services/tipo-activo.service';
import Swal from 'sweetalert2';
import { AddTipoActivosComponent } from '../add-tipo-activos/add-tipo-activos.component';

@Component({
  selector: 'app-view-tipo-activos',
  templateUrl: './view-tipo-activos.component.html',
  styleUrls: ['./view-tipo-activos.component.css']
})
export class ViewTipoActivosComponent implements OnInit {
  public url: any;
  public tipoActivos: Array<TipoActivo>;
  public tipoActivo: TipoActivo;
  @ViewChild(AddTipoActivosComponent) addmodal: AddTipoActivosComponent;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _tipoActivosService: TipoActivoService
  ) { }

  ngOnInit(): void {
    this.gettipoActivos();
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
        
        this._tipoActivosService.deleteTipoActivos(id).subscribe({
          next:(res)=>{
            this.gettipoActivos();
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

  gettipoActivos() {
    this._tipoActivosService.getTipoActivos().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.tipoActivos = res.dataList
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

  gettipoActivoById(id:number,mode:number) {
    this._tipoActivosService.getTipoActivos().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.tipoActivo = res.dataList.find((x:any)=> x.tipoActivoId == id)
            this.addmodal.form.patchValue(this.tipoActivo);           
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

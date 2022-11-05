import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPersona } from 'src/app/model/TipoPersona';
import { TipoPersonasService } from 'src/app/Services/tipo-personas.service';
import Swal from 'sweetalert2';
import { AddTiposPersonasComponent } from '../add-tipos-personas/add-tipos-personas.component';

@Component({
  selector: 'app-view-tipos-personas',
  templateUrl: './view-tipos-personas.component.html',
  styleUrls: ['./view-tipos-personas.component.css']
})
export class ViewTiposPersonasComponent implements OnInit {

  
  public url: any;
  public tipoPersonas: Array<TipoPersona>;
  public tipoPersona: TipoPersona;
  @ViewChild(AddTiposPersonasComponent) addmodal: AddTiposPersonasComponent;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _tipoPersonasService: TipoPersonasService
  ) { }

  ngOnInit(): void {
    this.gettipoPersonas();
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
        
        this._tipoPersonasService.deleteTipoPersonas(id).subscribe({
          next:(res)=>{
            this.gettipoPersonas();
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

  gettipoPersonas() {
    this._tipoPersonasService.getTipoPersonas().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.tipoPersonas = res.dataList
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

  gettipoPersonaById(id:number,mode:number) {
    this._tipoPersonasService.getTipoPersonas().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.tipoPersona = res.dataList.find((x:any)=> x.tipoPersonaId == id)
            this.addmodal.form.patchValue(this.tipoPersona);           
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

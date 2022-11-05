import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/model/Departamentos';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import Swal from 'sweetalert2';
import { AddDepartamentosComponent } from '../add-departamentos/add-departamentos.component';

@Component({
  selector: 'app-view-departamentos',
  templateUrl: './view-departamentos.component.html',
  styleUrls: ['./view-departamentos.component.css']
})
export class ViewDepartamentosComponent implements OnInit {

  public url: any;
  public departamentos: Array<Departamento>;
  public departamento: Departamento;
  @ViewChild(AddDepartamentosComponent) addmodal: AddDepartamentosComponent;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _departamentosService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.getdepartamentos();
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
        
        this._departamentosService.deleteDepartamentos(id).subscribe({
          next:(res)=>{
            this.getdepartamentos();
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

  getdepartamentos() {
    this._departamentosService.getDepartamentos().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.departamentos = res.dataList
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

  getdepartamentoById(id:number,mode:number) {
    this._departamentosService.getDepartamentos().subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
            this.departamento = res.dataList.find((x:any)=> x.departamentoId == id)
            this.addmodal.form.patchValue(this.departamento);           
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

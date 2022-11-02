import { Component, EventEmitter, OnInit, Output, ɵɵNgOnChangesFeature } from '@angular/core';
import { Departamento } from '../../../model/Departamentos';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../../../Services/departamento.service';
import { ActivosFijosService } from '../../../Services/activos-fijos.service';
import { ActivosFijo } from '../../../model/ActivoFijo';
import { TipoActivoService } from '../../../Services/tipo-activo.service';
import { TipoActivo } from '../../../model/TipoActivos';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-activos',
  templateUrl: './add-activos.component.html',
  styleUrls: ['./add-activos.component.css'],
  providers: [DepartamentoService, ActivosFijosService]
})
export class AddActivosComponent implements OnInit {
  public url: any;
  public status: any;
  public activo: ActivosFijo;
  public tipo: Array<TipoActivo>
  public departamento: Array<Departamento>;
  public date = new Date();
  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _activosService: ActivosFijosService,
    private _departamentosService: DepartamentoService,
    private _TipoService: TipoActivoService,
  ) {
    this.departamento = [];
    this.activo = new ActivosFijo(0,'',0,0,this.date,0,0);
    this.tipo = [];

  }

  ngOnInit(): void {
    this.getDepartamento();
    this.getTipo();
  }



  getDepartamento() {
    this._departamentosService.getDepartamentos().subscribe({
      next:(res)=>{
        if ( res.dataList ) {
            this.departamento = res.dataList
          }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  getTipo() {
    this._TipoService.getTipoActivos().subscribe({
      next:(res)=>{
        if (res.dataList) {
          this.tipo = res.dataList
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onSubmit(form: any) {
    console.log(form.value)

    this._activosService.addActivos(form.value).subscribe(
      response => {

        if (form) {
          this.status = 'success'
          this.activo = response.dataList;
          this._router.navigate(['/activos']);
          this.onSave.emit(true);
          form.reset();

        } else {
          this.status = "error";
          console.log(this.status)
        }

      },
      error => {
        this.status = 'error'
        console.log(error)
      }

    );
  }


}

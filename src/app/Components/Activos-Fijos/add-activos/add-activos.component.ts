import { Component, EventEmitter, OnInit, Output, ɵɵNgOnChangesFeature } from '@angular/core';
import { Departamento } from '../../../model/Departamentos';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../../../Services/departamento.service';
import { ActivosFijosService } from '../../../Services/activos-fijos.service';
import { ActivosFijo } from '../../../model/ActivoFijo';
import { TipoActivoService } from '../../../Services/tipo-activo.service';
import { TipoActivo } from '../../../model/TipoActivos';
import { DatePipe, NgFor } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
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
  
  public form: FormGroup = new FormGroup({
    activoFijoId : new FormControl(0),
    descripcion : new FormControl(''),
    departamentoId : new FormControl(0),
    tipoActivoId : new FormControl(0),
    fechaRegistro : new FormControl(null),
    valorCompra : new FormControl(0),
    depreciacionAcumulada : new FormControl(0),

  });

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

  onSubmit() {
    this._activosService.addActivos(this.form.value).subscribe({
      next:(res)=>{

        if (res.succeded) {      
          this.onSave.emit(true);
          this.Clear();
        } else {

          res.errors.forEach((element: any) => {    
            console.log(element);
          });
        }

      },
      error:(err)=>{
        this.status = 'error'
        console.log(err)
      }

    });
  }

  Clear(){
    this.form.patchValue({
      activoFijoId: 0,
      descripcion: '',
      departamentoId: 0,
      tipoActivoId: 0,
      fechaRegistro: null,
      valorCompra: 0,
      depreciacionAcumulada: 0
    })
  }


}

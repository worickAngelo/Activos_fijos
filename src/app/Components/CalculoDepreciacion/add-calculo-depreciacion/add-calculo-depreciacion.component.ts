import { Component, EventEmitter, Input, OnInit, Output, ɵɵNgOnChangesFeature } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivosFijosService } from '../../../Services/activos-fijos.service';
import { CalculoDepreciacion } from '../../../model/CalculoDepreciacion';
import { CalculoDepreciacionService } from '../../../Services/calculo-depreciacion.service';
import { ActivosFijo } from '../../../model/ActivoFijo';
import { DatePipe, NgFor } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-calculo-depreciacion',
  templateUrl: './add-calculo-depreciacion.component.html',
  styleUrls: ['./add-calculo-depreciacion.component.css'],
  providers:[CalculoDepreciacionService,ActivosFijosService]
})
export class AddCalculoDepreciacionComponent implements OnInit {
  public url: any;
  public status: any;
  public calculoDepreciacion: CalculoDepreciacion;
  public activosFijo: Array<ActivosFijo>;

  public form: FormGroup = new FormGroup({
    calculoDepreciacionId : new FormControl(0),
    añoProceso : new FormControl(''),
    mesProceso : new FormControl(0),
    fechaProceso : new FormControl(0),
    montoDepreciado : new FormControl(null),
    cuentaCompra : new FormControl(0),
    cuentaDepreciacion : new FormControl(0),

  });

  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false



  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _activosService: ActivosFijosService,
    private _depreciacionAcumuladaService: CalculoDepreciacionService,
  ) {
    this.activosFijo = [];
   }

  ngOnInit(): void {
    this.getActivosFijos();
  }


  getActivosFijos() {
    this._activosService.getActivos().subscribe({
      next:(res)=>{
        if ( res.dataList ) {
            this.activosFijo = res.dataList
          }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  Save(){
    this._depreciacionAcumuladaService.addCalculoDepreciacion(this.form.value).subscribe({
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

  Edit(){
    this._depreciacionAcumuladaService.editCalculoDepreciacion(this.form.value).subscribe({
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

  onSubmit() {
    if(this.inEdit == false){
      this.Save();
    }else{
      this.Edit();
    }
  }

  Clear(){
    this.form.patchValue({
      calculoDepreciacionId: 0,
      añoProceso: '',
      mesProceso: 0,
      activoFijoId: 0,
      fechaProceso: null,
      montoDepreciado: 0,
      cuentaCompra: 0,
      cuentaDepreciacion: 0
    })
  }


}

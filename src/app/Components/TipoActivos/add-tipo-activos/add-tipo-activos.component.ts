import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from 'src/app/model/Cuentas';
import { TipoActivo } from 'src/app/model/TipoActivos';
import { CuentasService } from 'src/app/Services/cuentas.service';
import { TipoActivoService } from 'src/app/Services/tipo-activo.service';

@Component({
  selector: 'app-add-tipo-activos',
  templateUrl: './add-tipo-activos.component.html',
  styleUrls: ['./add-tipo-activos.component.css'],
  providers:[CuentasService]
})
export class AddTipoActivosComponent implements OnInit {

  public url: any;
  public status: any;
  public tipoActivos: Array<TipoActivo>;
  public tipoActivo: TipoActivo;
  public Cuentas: Array<Cuenta>;


  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }

  public form: FormGroup = new FormGroup({
    tipoActivoId : new FormControl(0),
    descripcion : new FormControl(''),
    cuentaContableCompra: new FormControl(0),
    cuentaContableDepreciacion: new FormControl(0),
    estado : new FormControl(0),
  });

  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false


  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _tipoActivosService: TipoActivoService,
    private _CuentasService: CuentasService
  ) {
    this.Cuentas = [];
  }

  ngOnInit(): void {
    this.getCuentas();
  }

  getCuentas() {
    this._CuentasService.getCuentas().subscribe({
      next:(res)=>{
        if ( res.dataList ) {
            this.Cuentas = res.dataList
          }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  Save(){
    this._tipoActivosService.addTipoActivos(this.form.value).subscribe({
      next:(res)=>{

        if (res.succeded) {
          this.onSave.emit(true);
          this.Clear();
          this.closebutton.nativeElement.click();
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
    this._tipoActivosService.editTipoActivos(this.form.value).subscribe({
      next:(res)=>{

        if (res.succeded) {
          this.onSave.emit(true);
          this.Clear();
          this.closebutton.nativeElement.click();
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
      tipoActivoId: 0,
      descripcion: '',
      cuentaContableCompra: 0,
      cuentaContableDepreciacion: 0,
      estado: 0
    })
  }

}

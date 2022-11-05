import { Component, EventEmitter, Input, OnInit, Output, ɵɵNgOnChangesFeature } from '@angular/core';
import { Cuenta } from '../../../model/Cuentas';
import { Router, ActivatedRoute } from '@angular/router';
import { CuentasService } from '../../../Services/cuentas.service';
import { DatePipe, NgFor } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-cuentas',
  templateUrl: './add-cuentas.component.html',
  styleUrls: ['./add-cuentas.component.css'],
  providers: [CuentasService]
})
export class AddCuentasComponent implements OnInit {

  public url: any;
  public status: any;
  public ceunta: Cuenta;
  public ceuntas: Array<Cuenta>

  public form: FormGroup = new FormGroup({
    cuentaId : new FormControl(0),
    descripcion : new FormControl(''),
    estado : new FormControl(0),
  });

  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _cuentaService: CuentasService,
  ) {
    this.ceuntas = [];
   }

  ngOnInit(): void {
  }

  Save(){
    this._cuentaService.addCuentas(this.form.value).subscribe({
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
    this._cuentaService.editCuentas(this.form.value).subscribe({
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
      cuentaId: 0,
      descripcion: '',
      estado: 0,
    })
  }


}

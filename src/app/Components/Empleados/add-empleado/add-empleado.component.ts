import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ɵɵNgOnChangesFeature } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadosService } from '../../../Services/empleados.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/model/Empleados';
import { DepartamentoService } from '../../../Services/departamento.service';
import { TipoPersonasService } from '../../../Services/tipo-personas.service';
import { TipoPersona } from 'src/app/model/TipoPersona';
import { Departamento } from '../../../model/Departamentos';
@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css'],
  providers:[EmpleadosService,DepartamentoService,TipoPersonasService]
})
export class AddEmpleadoComponent implements OnInit {
  public url: any;
  public status: any;
  public empleado: Empleado;
  public tipoPersona: Array<TipoPersona>
  public departamento: Array<Departamento>;

  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _empleadoService: EmpleadosService,
    private _departamentosService: DepartamentoService,
    private _tipoPersona: TipoPersonasService,
  ) {
   }

  ngOnInit(): void {
    this.getDepartamento();
    this.getTipoPersona();
  }

  public form: FormGroup = new FormGroup({
    empleadoId : new FormControl(0),
    nombre : new FormControl(''),
    cedula : new FormControl(''),
    departamentoId : new FormControl(0),
    tipoPersonaId : new FormControl(0),
    fechaIngreso : new FormControl(0),
    estado : new FormControl(0),
  });
  Clear(){
    this.form.patchValue({
      empleadoId: 0,
      nombre: '',
      cedula: '',
      departamentoId: 0,
      tipoPersonaId: 0,
      fechaIngreso: 0,
      estado: 0
    })
  }

  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false

  onSubmit() {
    if(this.inEdit == false){
      this.Save();
    }else{
      this.Edit();
    }
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
  getTipoPersona() {
    this._tipoPersona.getTipoPersonas().subscribe({
      next:(res)=>{
        if (res.dataList) {
          this.tipoPersona = res.dataList
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  Save(){
    this._empleadoService.addEmpleados(this.form.value).subscribe({
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
    this._empleadoService.editEmpleados(this.form.value).subscribe({
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

}

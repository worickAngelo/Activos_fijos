import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/model/Departamentos';
import { DepartamentoService } from 'src/app/Services/departamento.service';

@Component({
  selector: 'app-add-departamentos',
  templateUrl: './add-departamentos.component.html',
  styleUrls: ['./add-departamentos.component.css']
})
export class AddDepartamentosComponent implements OnInit {
  public url: any;
  public status: any;
  public departamentos: Array<Departamento>;
  public departamento: Departamento;

  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }

  public form: FormGroup = new FormGroup({
    departamentoId : new FormControl(0),
    descripcion : new FormControl(''),
    estado : new FormControl(0),
  });

  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false


  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _departamentosService: DepartamentoService,
  ) {
  }

  ngOnInit(): void {
  }

  Save(){
    this._departamentosService.addDepartamentos(this.form.value).subscribe({
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
    this._departamentosService.editDepartamentos(this.form.value).subscribe({
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
      departamentoId: 0,
      descripcion: '',
      estado: 0
    })
  }

}

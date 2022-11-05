import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPersona } from 'src/app/model/TipoPersona';
import { TipoPersonasService } from 'src/app/Services/tipo-personas.service';

@Component({
  selector: 'app-add-tipos-personas',
  templateUrl: './add-tipos-personas.component.html',
  styleUrls: ['./add-tipos-personas.component.css']
})
export class AddTiposPersonasComponent implements OnInit {

  public url: any;
  public status: any;
  public tipoPersonas: Array<TipoPersona>;
  public tipoPersona: TipoPersona;

  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }

  public form: FormGroup = new FormGroup({
    tipoPersonaId : new FormControl(0),
    descripcion : new FormControl(''),
    estado : new FormControl(0),
  });

  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false


  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _tipoPersonasService: TipoPersonasService,
  ) {
  }

  ngOnInit(): void {
  }

  Save(){
    this._tipoPersonasService.addTipoPersonas(this.form.value).subscribe({
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
    this._tipoPersonasService.editTipoPersonas(this.form.value).subscribe({
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
      tipoPersonaId: 0,
      descripcion: '',
      estado: 0
    })
  }

}

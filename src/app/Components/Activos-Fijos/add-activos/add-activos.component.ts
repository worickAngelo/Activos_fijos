import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../model/Departamentos';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../../../Services/departamento.service';
import { ActivosFijosService } from '../../../Services/activos-fijos.service';
import { ActivosFijo } from '../../../model/ActivoFijo';
import { TipoActivoService } from '../../../Services/tipo-activo.service';
import { TipoActivo } from '../../../model/TipoActivos';

@Component({
  selector: 'app-add-activos',
  templateUrl: './add-activos.component.html',
  styleUrls: ['./add-activos.component.css'],
  providers:[DepartamentoService,ActivosFijosService]
})
export class AddActivosComponent implements OnInit {
  public url: any;
  public status: any;
  public activos: Array<ActivosFijo>
  public tipo: Array<TipoActivo>
  public departamento: Array<Departamento>;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _activosService: ActivosFijosService,
    private _departamentosService: DepartamentoService,
    private _TipoService: TipoActivoService,
  ) {
    this.departamento = [];
    this.activos = [];
    this.tipo = [];
   }

  ngOnInit(): void {
    this.getDepartamento();
    this.getTipo();
  }

  getDepartamento(){
    this._departamentosService.getDepartamentos().subscribe(
      res => {
        if (res.dataList
        ) {
          this.departamento = res.dataList
        }
      },
      err => {
        console.log(err);
      }
    )
  }
  getTipo(){
    this._TipoService.getTipoActivos().subscribe(
      res => {
        if (res.dataList
        ) {
          this.tipo = res.dataList
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  onSubmit(form:any){
    this._activosService.addActivos(this.activos).subscribe(
      response =>{

        if(this.activos){
          this.status = 'success'
          this.activos = response.dataList;
          this._router.navigate(['/inicio']);

          console.log(this.activos)
        }else{
          this.status = "error";
          console.log(this.status)
        }

      },
      error =>{
        this.status = 'error'
        console.log(error)
      }

    );
  }

}

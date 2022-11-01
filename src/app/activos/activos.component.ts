import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivosFijosService } from '../Services/activos-fijos.service';
import { ActivosFijo } from '../model/ActivoFijo';
import { global } from '../Services/Global';
@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css'],
  providers: [ActivosFijosService]
})
export class ActivosComponent implements OnInit {

  public url: any;
  public activos: Array<ActivosFijo>;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _activosService: ActivosFijosService
  ) {
    this.activos = [];
    this.url = global.url;
  }
  ngOnInit(): void {
    this.getActivos();
  }

  getActivos() {
    this._activosService.getActivos().subscribe(
      res => {
        if (res.dataList
        ) {
          this.activos = res.dataList
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}

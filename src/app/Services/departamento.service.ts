import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  getDepartamentos(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/Departamentos',{ headers: headers });
  }

}

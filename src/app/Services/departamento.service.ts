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

  addDepartamentos(departamento: any): Observable<any> {
    let params = JSON.stringify(departamento);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/Departamentos', params, { headers: headers });
  }

  editDepartamentos(departamento: any): Observable<any> {
    let params = JSON.stringify(departamento);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/Departamentos', params, { headers: headers });
  }

  deleteDepartamentos(departamentoId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/Departamentos?DepartamentoId='+departamentoId, {headers: headers});
  }

}

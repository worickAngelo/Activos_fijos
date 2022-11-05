import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  getCuentas(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/Cuentas',{ headers: headers });
  }

  addCuentas(Cuenta: any): Observable<any> {
    let params = JSON.stringify(Cuenta);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/Cuentas', params, { headers: headers });
  }

  editCuentas(Cuenta: any): Observable<any> {
    let params = JSON.stringify(Cuenta);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/Cuentas', params, { headers: headers });
  }

  deleteCuentas(CuentaId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/Cuentas?CuentaId='+CuentaId, {headers: headers});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  getEmpleados(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/Empleados',{ headers: headers });
  }

  addEmpleados(Empleado: any): Observable<any> {
    let params = JSON.stringify(Empleado);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/Empleados', params, { headers: headers });
  }

  editEmpleados(Empleado: any): Observable<any> {
    let params = JSON.stringify(Empleado);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/Empleados', params, { headers: headers });
  }

  deleteEmpleados(EmpleadoId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/Empleados?EmpleadoId='+EmpleadoId, {headers: headers});
  }
}

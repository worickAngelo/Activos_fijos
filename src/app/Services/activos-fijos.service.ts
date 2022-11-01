import { Injectable } from '@angular/core';
import { global } from './Global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivosFijosService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  getActivos(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/ActivoFijos',{ headers: headers });
  }

  addActivos(activo: any): Observable<any> {
    let params = JSON.stringify(activo);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/ActivoFijos', params, { headers: headers });
  }
  
  editActivos(Activo: any): Observable<any> {
    let params = JSON.stringify(Activo);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/ActivoFijos', params, { headers: headers });
  }

  deleteActivos(ActivoId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/ActivoFijos/'+ActivoId, {headers: headers});
  }
}

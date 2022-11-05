import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoActivoService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  getTipoActivos(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/TipoActivos',{ headers: headers });
  }

  addTipoActivos(TipoActivo: any): Observable<any> {
    let params = JSON.stringify(TipoActivo);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/TipoActivos', params, { headers: headers });
  }

  editTipoActivos(TipoActivo: any): Observable<any> {
    let params = JSON.stringify(TipoActivo);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/TipoActivos', params, { headers: headers });
  }

  deleteTipoActivos(TipoActivoId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/TipoActivos?tipoActivoId='+TipoActivoId, {headers: headers});
  }
}

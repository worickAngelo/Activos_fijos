import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoPersonasService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  getTipoPersonas(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/TipoPersonas',{ headers: headers });
  }

  addTipoPersonas(TipoPersona: any): Observable<any> {
    let params = JSON.stringify(TipoPersona);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/TipoPersonas', params, { headers: headers });
  }

  editTipoPersonas(TipoPersona: any): Observable<any> {
    let params = JSON.stringify(TipoPersona);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/TipoPersonas', params, { headers: headers });
  }

  deleteTipoPersonas(TipoPersonaId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/TipoPersonas?TipoPersonaId='+TipoPersonaId,  {headers: headers});
  }
}

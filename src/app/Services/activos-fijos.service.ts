import { Injectable } from '@angular/core';
import { golbal } from './Global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivosFijosService {
  public url: string;
  constructor(private _http:HttpClient) {
    this.url = golbal.url;
   }
}

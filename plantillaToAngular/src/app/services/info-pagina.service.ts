import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
 private _infoPagina:InfoPagina={};
 
  constructor(private http: HttpClient) {
    /* console.log('Servicio InfoPagina'); */

    this.http.get('assets/data/info-pagina.json').subscribe({
      next: (resp: InfoPagina) => {
      /* console.log(resp);
      console.log(resp['twitter']);
      console.log(resp.twitter); */
      this._infoPagina=resp;
      },
      error: (err)=>{
      console.error("Error");
      }
      });
    }

    public get infoPagina() {
      return this._infoPagina;
    }
    public set infoPagina(value) {
      this._infoPagina = value;
    }
}

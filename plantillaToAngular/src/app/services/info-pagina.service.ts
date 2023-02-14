import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {
    console.log('Servicio InfoPagina');
    this.http.get('assets/data/info-pagina.json').subscribe({
      next: (resp: InfoPagina) => {
      //console.log(resp);
      console.log(resp['twitter']);
      //console.log(resp.twitter);
      },
      error: (err)=>{
      console.error("Error");
      }
      });
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { MiembroEquipo } from '../interfaces/miembro-equipo.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  private _infoPagina: InfoPagina = {};
  private _equipo: MiembroEquipo[] = [];
  private cargada = false;
  
  constructor(private http: HttpClient) {
    /* console.log('Servicio InfoPagina'); */

    this.http.get('../../assets/data/info-pagina.json').subscribe({
      next: (resp: InfoPagina) => {
        /* console.log(resp);
      console.log(resp['twitter']);
      console.log(resp.twitter); */
        this._infoPagina = resp;
      },
      error: (err) => {
        console.error('Error');
      },
    });

    this.http.get<MiembroEquipo[]>(
      'https://portfolio-29031-default-rtdb.europe-west1.firebasedatabase.app/Equipo.json'
    )
      .subscribe((resp: MiembroEquipo[]) => {
        this.cargada = true;
        this._equipo = resp;
      });
  }

  public get infoPagina() {
    return this._infoPagina;
  }
  public set infoPagina(value) {
    this._infoPagina = value;
  }

  public get equipo(): MiembroEquipo[] {
    return this._equipo;
  }
  public set equipo(value: MiembroEquipo[]) {
    this._equipo = value;
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _paises: any[] = [];
  public get paises(): any[] {
    return this._paises;
  }
  public set paises(value: any[]) {
    this._paises = value;
  }

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    //indicamos los parámetros que queremos que nos devuelva la petición
    //depende de como funcione la API
    return new HttpParams().set('fields', 'name,capital,cioc,flags,population');
  }

  constructor(private http: HttpClient) {}
  
  buscarPais(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });
  }

  buscarCapital( termino: string ):Observable<PaisInterface[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha( id: string ):Observable<PaisInterface>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisInterface>(url, { params: this.httpParams });
  }

  buscarRegion (region: string):Observable<PaisInterface[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });

  }
    
}

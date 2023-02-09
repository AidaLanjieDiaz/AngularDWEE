import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsInterfaces } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey: string = 'AQdokyrk571axQJt4ijihllIj1YIPmPF';//API key que se optiene en giphy
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';//URL llamada a la API

  private _historial: string[] = [];//Guarda el historial de búsquedas, por convención se pone _ para indicar que es privada
  // sus getter and setter porque es privada
  public get historial(): string[] {
    return this._historial;
  }
  public set historial(value: string[]) {
    this._historial = value;
  }

  //Hacemos uso de la interfaz Gif
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) { }
  // Inyectamos el HttpClient del HttpClientModule importado en app.module.ts
  //El constructor sólo se ejecuta una vez

  buscarGifs(query: string) {

     // comprobar si esta o no para que no se repita
     if (this._historial.includes(query) == false) {
      this._historial.push(query);
     }

    return this.getQuery(query);
  }

  
  getQuery(query: string) {
    //Creamos un objeto para los parámetros de llamada a la API
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<GifsInterfaces>(`${this.servicioUrl}/search`, { params })//SearchGifsResponse se obtiene de la interfaz
      .subscribe((resp) => {//resp es un Observable, con más funcionalidades que las Promesas
        this.resultados = resp.data;
      });
  }

  
}






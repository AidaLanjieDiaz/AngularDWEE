import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _termino: string = "";
  private _info: InfoPagina = {};
 
  constructor(private infoPaginaService: InfoPaginaService,
    private router:Router) {
    /* this._info = infoPaginaService.infoPagina; */
  }

  public get info(): InfoPagina {
    this._info = this.infoPaginaService.infoPagina;
    return this._info;
  }
  public set info(value: InfoPagina) {
    this._info = value;
  }

  public get termino(): string {
    return this._termino;
  }
  public set termino(value: string) {
    this._termino = value;
  }
  
  buscarProducto(termino: string) {
    if(termino.length<1){return}
    let busqueda:string=termino;
    this._termino="";
    this.router.navigate (['/search', busqueda]);
  }
  
}

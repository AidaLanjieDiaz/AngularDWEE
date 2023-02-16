import { Component } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private _info: InfoPagina = {};
   
  constructor(private infoPaginaService: InfoPaginaService) {
   /*  this._info = infoPaginaService.infoPagina;
    console.log(this._info); */
  }

  public get info(): InfoPagina {
    this._info = this.infoPaginaService.infoPagina;
    /* console.log(this._info); */
    return this._info;
  }
  public set info(value: InfoPagina) {
    this._info = value;
  }

}

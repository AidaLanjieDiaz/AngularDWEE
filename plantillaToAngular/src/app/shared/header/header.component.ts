import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _info = {};
  
  constructor(private infoPaginaService: InfoPaginaService) {
    this._info = infoPaginaService.infoPagina;
  }

  public get info() {
    return this._info;
  }
  public set info(value) {
    this._info = value;
  }
}

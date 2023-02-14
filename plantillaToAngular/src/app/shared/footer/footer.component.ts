import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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

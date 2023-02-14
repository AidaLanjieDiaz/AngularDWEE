import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private _equipo: any = {};
  
  constructor(private infoPaginaService: InfoPaginaService) {
    this._equipo = infoPaginaService.equipo;
  }

  public get equipo(): any {
    return this._equipo;
  }
  public set equipo(value: any) {
    this._equipo = value;
  }
  
  
}

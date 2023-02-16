import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { MiembroEquipo } from '../../interfaces/miembro-equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private _equipo: MiembroEquipo[] = [];
     
  constructor(private infoPaginaService: InfoPaginaService) {
    
  }

  public get equipo(): MiembroEquipo[] {
    this._equipo = this.infoPaginaService.equipo;
    return this._equipo;
  }
  public set equipo(value: MiembroEquipo[]) {
    this._equipo = value;
  }
  
  
}

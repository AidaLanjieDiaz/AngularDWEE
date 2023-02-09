import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  private _historial: any[] = [];

  get historial() : any[] {
    return this._historial;
  }
  
  constructor(private gifsService: GifsService) {
    this._historial=gifsService.historial;
   }

  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }

}

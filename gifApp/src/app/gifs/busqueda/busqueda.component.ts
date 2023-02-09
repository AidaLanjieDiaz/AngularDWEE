import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  valor:string = "";

  constructor( private gifsService: GifsService ) {}//crea la propiedad en el constructor

  buscar() {
    return this.gifsService.buscarGifs(this.valor);
  }
  
}

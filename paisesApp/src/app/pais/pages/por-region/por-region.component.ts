import { Component } from '@angular/core';
import { PaisInterface } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  
  pais:string = "";
  public paises:PaisInterface[] = [];
   
  /* declaracion de la variable de error */
  hayError: boolean = false;
 
  constructor( private paisService: PaisService ) {}
 
  buscar() {
   this.hayError = false;
   this.paisService.buscarPais(this.pais)
   .subscribe({
   next: (resp) => {
   this.paises = resp;
   },
   error: (err) => { this.hayError = true; this.paises = [];
   console.log("ERROR" + err); }
   });
  }

  /* PARTE DE LAS REGIONES */
  regiones: string[] = ['Europe', 'Americas', 'Asia', 'Africa', 'Oceania'];
  regionActiva: string = '';

  activarRegion( region: string ) {
    /* Si la region es igual que la region activa simplemente se sale 
    y no hace nada */
    if ( region === this.regionActiva ) {
       return; 
    }

    /* Si no, guarda la region recibida en activa para que se quede 
    en esa region hasta que se le cliquee a otra */
    this.regionActiva = region;
    this.paises = [];

    /* Y aqui se le llama a buscar region para que te saque los paises
    de esa region y luego los almacene en el array de paises que luego
    se mostrará */
    this.paisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises );
  }
  
}

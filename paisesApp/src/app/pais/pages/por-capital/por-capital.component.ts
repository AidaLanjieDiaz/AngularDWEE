import { Component } from '@angular/core';
import { PaisInterface } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  capital:string = "";
  public capitales:PaisInterface[] = [];
   
  /* declaracion de la variable de error */
  hayError: boolean = false;
 
  constructor( private paisService: PaisService ) {}
 
  buscarCapi() {
   this.hayError = false;
   this.paisService.buscarCapital(this.capital)
   .subscribe({
   next: (resp) => {
   this.capitales = resp;
   },
   error: (err) => { this.hayError = true; this.capitales = [];
   console.log("ERROR" + err); }
   });
  
 }
}

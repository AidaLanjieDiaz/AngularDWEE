import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PaisInterface } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

 pais:string = "";
 public paises:PaisInterface[] = [];
  
 /* declaracion de la variable de error */
 hayError: boolean = false;

 constructor( private paisService: PaisService ) {}

 buscarPais() {
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
 
/*  esto desaparece ya que ahora se hace aqui en el subscribe, en vez de en el servidor */
  /*  buscar () {
  return this.paisService.buscarPais(this.pais);
 } 
 get elements() {
  return this.paisService.resultados; */

}

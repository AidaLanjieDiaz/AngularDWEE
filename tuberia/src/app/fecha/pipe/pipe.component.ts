import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  fecha: Date = new Date(1988, 3, 15, 12, 30, 15); //15 de Abril del 1988 12:30:15
  
  fecha1 = new Date(1988, 3, 15); //15 de Abril del 1988
  idFormatoFecha = true; // true == shortDate ; false == fullDate
  get formatoFecha() { return this.idFormatoFecha ? 'shortDate' : 'fullDate'; }
  cambiarFormatoFecha() { this.idFormatoFecha = !this.idFormatoFecha; }
}

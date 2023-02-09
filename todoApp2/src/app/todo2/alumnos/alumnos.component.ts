import { Component, OnInit } from '@angular/core';
import { NombresService } from '../service2.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
 
export class AlumnosComponent implements OnInit {
  private _nombre: string = "";
  private _nota: string = "";
 
  constructor(private servicioAlumnos: NombresService) { }

  ngOnInit(): void {
  }

  addTarea(): void {
    if (this._nombre !== '' && this._nota !== '') {

      const ObjetoPunt = {
        nombre: this._nombre,
        nota: this._nota
      }
      this.servicioAlumnos.nombres.push(JSON.stringify(ObjetoPunt));

      this._nombre = "";
      this._nota = "";

      console.log(ObjetoPunt);
    }
  }

set nombre(nombre: string) {
this._nombre = nombre;
}
get nombre(): string {
return this._nombre;
}

set nota(nota: string) {
  this._nota = nota;
}
get nota(): string {
  return this._nota;
}

}
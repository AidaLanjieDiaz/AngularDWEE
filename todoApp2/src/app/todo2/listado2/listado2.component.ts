import { Component, OnInit } from '@angular/core';
import { NombresService } from '../service2.service';

@Component({
  selector: 'app-listado2',
  templateUrl: './listado2.component.html',
  styleUrls: ['./listado2.component.css']
})

export class Listado2Component implements OnInit {

  private _nombres: any[] = [];

  constructor(private servicioAlumnos: NombresService) {}
  public get nombres(): any[] {
      return this._nombres;
    }
    public set nombres(value: any[]) {
    this._nombres = value;
    }
    ngOnInit(): void {
    this._nombres = this.servicioAlumnos.nombres;
  }
  completada(nombreCompletada: any): void {
    
  this._nombres = this._nombres.filter((nombres) => nombres !== nombreCompletada);
  this.servicioAlumnos.nombres=this._nombres;

  }
  
}

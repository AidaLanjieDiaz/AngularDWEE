import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { Listado2Component } from './listado2/listado2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlumnosComponent,
    Listado2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AlumnosComponent,
    Listado2Component
  ]
})
export class Todo2Module { }

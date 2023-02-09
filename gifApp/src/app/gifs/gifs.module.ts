import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BusquedaComponent,
    GifsPageComponent,
   ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ]
})
export class GifsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';
import { NumerosComponent } from './numeros/numeros.component';
import { JsonComponent } from './json/json.component';



@NgModule({
  declarations: [
    PipeComponent,
    NumerosComponent,
    JsonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  PipeComponent,
  NumerosComponent,
  JsonComponent
]
})
export class FechaModule { }

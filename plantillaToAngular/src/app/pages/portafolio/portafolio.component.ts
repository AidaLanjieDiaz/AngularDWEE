import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoIdx } from '../../interfaces/producto-idx.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  private _productos: ProductoIdx[] = [];
  private _cargando: any = {};
 
  constructor(private productosService: ProductosService) {
  }

  public get productos(): ProductoIdx[] {
    this._productos = this.productosService.productosIdx;
    return this._productos;
  }
  public set productos(value: ProductoIdx[]) {
    this._productos = value;
  }

  public get cargando(): any {
    this._cargando = this.productosService.cargando;
    return this._cargando;
  }
  public set cargando(value: any) {
    this._cargando = value;
  }

  
}

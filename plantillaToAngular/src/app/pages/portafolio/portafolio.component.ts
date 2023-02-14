import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  private _productos: any = {};
 
  constructor(private productosService: ProductosService) {
    this._productos = productosService.productosIdx;
    
  }

  public get productos(): any {
    return this._productos;
  }
  public set productos(value: any) {
    this._productos = value;
  }
  
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoIdx } from 'src/app/interfaces/producto-idx.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  private _productos: ProductoIdx[] = [];
  private _termino: any = {};
  
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService
  ) {}

  public get productos(): ProductoIdx[] {
    return this._productos;
  }
  public set productos(value: ProductoIdx[]) {
    this._productos = value;
  }

  public get termino(): any {
    return this._termino;
  }
  public set termino(value: any) {
    this._termino = value;
  }

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      this.termino = parametros['termino'];

      this.productoService.buscarProducto(this.termino)
        
    });
  }
  
}

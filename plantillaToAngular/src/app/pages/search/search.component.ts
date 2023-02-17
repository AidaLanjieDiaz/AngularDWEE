import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoIdx } from 'src/app/interfaces/producto-idx.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private _productos: ProductoIdx[] = [];
  private _termino: string = "";

  hayError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService
  ) {
    
  }

  ngOnInit() {
     this.route.params.subscribe((parametros) => {
     console.log(parametros['termino']);
     this.productos = this.productoService.buscarProd(parametros['termino']);
      console.log(this.productos);
    });
  }

 
  public get productos(): ProductoIdx[] {
    return this._productos;
  }

  public set productos(value: ProductoIdx[]) {
    this._productos = value;
  }

  public get termino(): string {
    return this._termino;
  }
  public set termino(value: string) {
    this._termino = value;
  }

  
  
}

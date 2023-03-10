import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { ProductoIdx } from '../interfaces/producto-idx.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _cargando = true;
  private _productosIdx: ProductoIdx[] = [];
  private _productosFiltrado: ProductoIdx[] = [];

  constructor(private http: HttpClient) {
    this.http.get<ProductoIdx[]>(
        'https://portfolio-29031-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
      )
      .subscribe((resp: ProductoIdx[]) => {
        this._productosIdx = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 3000);
      });
  }

  public get productosIdx(): ProductoIdx[] {
    return this._productosIdx;
  }
  public set productosIdx(value: ProductoIdx[]) {
    this._productosIdx = value;
  }

  public get cargando() {
    return this._cargando;
  }
  public set cargando(value) {
    this._cargando = value;
  }

  public get productosFiltrado(): ProductoIdx[] {
    return this._productosFiltrado;
  }
  public set productosFiltrado(value: ProductoIdx[]) {
    this._productosFiltrado = value;
  }

  getProducto(id: string) {
    return this.http.get(
      `https://portfolio-29031-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`
    );
  }

  private cargarProductos(){
    return new Promise<void>((resolve, reject) => {
      this.http.get<ProductoIdx[]>(
        'https://portfolio-29031-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
      )
    .subscribe((resp: ProductoIdx[]) => {
    this.productosIdx = resp;
    this.cargando = false;
    resolve();
    });
    });
    }

  buscarProd(termino: string) {
    if (this.productosIdx.length === 0) {
    // cargar productos
    this.cargarProductos().then(() => {
    // ejecutar después de tener los productos
    // Aplicar filtro
    this.filtrarProductos(termino);
    });
    } else {
    // aplicar el filtro
    this.filtrarProductos(termino);
    }

    return this.productosFiltrado;
    }

    private filtrarProductos(termino: string) {
      this.productosFiltrado = [];

      termino = termino.toLocaleLowerCase();
      this.productosIdx.forEach((prod) => {
        const tituloLower = prod.titulo.toLocaleLowerCase();
        if (
          prod.categoria.indexOf(termino) >= 0 ||
          tituloLower.indexOf(termino) >= 0
        ) {
          this.productosFiltrado.push(prod);
        }
      });

      return this.productosFiltrado;
    }
  
}

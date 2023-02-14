import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoIdx } from '../interfaces/producto-idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private _cargando = true;
  
  private _productosIdx: ProductoIdx[] = [];
    
  constructor(private http: HttpClient) {

    this.http.get<ProductoIdx[]>(
      'https://portfolio-29031-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
    )
    .subscribe((resp: ProductoIdx[]) => {
      this._productosIdx = resp;
      setTimeout(() => {
        this.cargando=false;
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

  
  getProducto(id: string) {
    return this.http.get(
      `https://portfolio-29031-default-rtdb.europe-
      west1.firebasedatabase.app/productos/${id}.json`
    );
  }
}

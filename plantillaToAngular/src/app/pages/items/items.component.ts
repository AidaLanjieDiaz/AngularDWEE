import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/productos.interface';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  private _producto: any = {};
  private _id: any = {};
  
  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      this.id = parametros['id'];

      this.productoService
        .getProducto(this.id)
        .subscribe((resp: Productos) => {
          this.producto = resp;
          console.log('Dato recibido: ' + this.producto.producto);
        });
    });
  }

  public get producto(): any {
    return this._producto;
  }
  public set producto(value: any) {
    this._producto = value;
  }

  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
  }
  
}

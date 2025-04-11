// src/app/services/productos.service.ts
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';
import { TotalumService } from './totalum.service';
import { DataAdapter } from '../utils/data-adapter';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly COLLECTION_NAME = 'productos';

  constructor(private totalumService: TotalumService) { }

  getProductos(): Observable<Producto[]> {
    return from(this.totalumService.getItems(this.COLLECTION_NAME))
      .pipe(map((data: any) => DataAdapter.adaptProductos(data)));
  }

  getProducto(id: string): Observable<Producto> {
    return from(this.totalumService.getItemById(this.COLLECTION_NAME, id))
      .pipe(map((data: any) => DataAdapter.adaptProducto(data)));
  }

  // Métodos adicionales para crear, actualizar y eliminar productos

  createProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.createItem(this.COLLECTION_NAME, producto))
      .pipe(map((data: any) => DataAdapter.adaptProducto(data)));
  }

  updateProducto(id: string, producto: Partial<Producto>): Observable<Producto> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.updateItem(this.COLLECTION_NAME, id, producto))
      .pipe(map((data: any) => DataAdapter.adaptProducto(data)));
  }

  deleteProducto(id: string): Observable<any> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.deleteItem(this.COLLECTION_NAME, id));
  }
}
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Producto } from '../models/producto';
import { TotalumService } from './totalum.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private totalumService: TotalumService) { }

  getProductos(): Observable<Producto[]> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.collection('productos').get());
  }

  getProducto(id: string): Observable<Producto> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.collection('productos').doc(id).get());
  }

  // Agrega métodos para crear, actualizar y eliminar productos si es necesario
}
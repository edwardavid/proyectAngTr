// src/app/services/pedidos.service.ts
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedido } from '../models/pedido';
import { TotalumService } from './totalum.service';
import { DataAdapter } from '../utils/data-adapter';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private readonly COLLECTION_NAME = 'pedidos';

  constructor(private totalumService: TotalumService) { }

  getPedidos(): Observable<Pedido[]> {
    return from(this.totalumService.getItems(this.COLLECTION_NAME))
      .pipe(map((data: any) => DataAdapter.adaptPedidos(data)));
  }

  getPedido(id: string): Observable<Pedido> {
    return from(this.totalumService.getItemById(this.COLLECTION_NAME, id))
      .pipe(map((data: any) => DataAdapter.adaptPedido(data)));
  }

  // Métodos adicionales para crear, actualizar y eliminar pedidos

  createPedido(pedido: Omit<Pedido, 'numeroPedido'>): Observable<Pedido> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.createItem(this.COLLECTION_NAME, pedido))
      .pipe(map((data: any) => DataAdapter.adaptPedido(data)));
  }

  updatePedido(numeroPedido: string, pedido: Partial<Pedido>): Observable<Pedido> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.updateItem(this.COLLECTION_NAME, numeroPedido, pedido))
      .pipe(map((data: any) => DataAdapter.adaptPedido(data)));
  }

  deletePedido(numeroPedido: string): Observable<any> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.deleteItem(this.COLLECTION_NAME, numeroPedido));
  }
}
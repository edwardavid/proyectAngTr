import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Pedido } from '../models/pedido';
import { TotalumService } from './totalum.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  constructor(private totalumService: TotalumService) { }

  getPedidos(): Observable<Pedido[]> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.collection('pedidos').get() as Promise<Pedido[]>);
  }

  getPedido(id: string): Observable<Pedido> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.collection('pedidos').doc(id).get() as Promise<Pedido>);
  }
}
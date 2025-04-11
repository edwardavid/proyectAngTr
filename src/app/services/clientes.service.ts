import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';
import { TotalumService } from './totalum.service';
import { DataAdapter } from '../utils/data-adapter';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private readonly COLLECTION_NAME = 'clientes';

  constructor(private totalumService: TotalumService) { }

  getClientes(): Observable<Cliente[]> {
    return from(this.totalumService.getItems(this.COLLECTION_NAME))
      .pipe(map((data: any) => DataAdapter.adaptClientes(data)));
  }

  getCliente(id: string): Observable<Cliente> {
    return from(this.totalumService.getItemById(this.COLLECTION_NAME, id))
      .pipe(map((data: any) => DataAdapter.adaptCliente(data)));
  }

  // Métodos adicionales para crear, actualizar y eliminar clientes
  createCliente(cliente: Omit<Cliente, 'id'>): Observable<Cliente> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.createItem(this.COLLECTION_NAME, cliente))
      .pipe(map((data: any) => DataAdapter.adaptCliente(data)));
  }

  updateCliente(id: string, cliente: Partial<Cliente>): Observable<Cliente> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.updateItem(this.COLLECTION_NAME, id, cliente))
      .pipe(map((data: any) => DataAdapter.adaptCliente(data)));
  }

  deleteCliente(id: string): Observable<any> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.crud.deleteItem(this.COLLECTION_NAME, id));
  }
}
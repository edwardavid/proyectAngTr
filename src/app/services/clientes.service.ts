import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Cliente } from '../models/cliente';
import { TotalumService } from './totalum.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private totalumService: TotalumService) { }

  getClientes(): Observable<Cliente[]> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.collection('clientes').get());
  }

  getCliente(id: string): Observable<Cliente> {
    const sdk = this.totalumService.getSDK();
    return from(sdk.collection('clientes').doc(id).get());
  }

  // Agrega métodos para crear, actualizar y eliminar clientes si es necesario
}
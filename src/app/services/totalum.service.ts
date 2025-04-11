import { Injectable } from '@angular/core';
import { TotalumSDK } from 'totalum-sdk';

@Injectable({
  providedIn: 'root'
})
export class TotalumService {
  private sdk: any;

  constructor() {
    // Inicializa el SDK de TOTALUM (esto es un ejemplo, ajusta según la documentación oficial)
    this.sdk = new TotalumSDK({
      apiKey: 'TU_API_KEY',
      endpoint: 'TU_ENDPOINT'
    });
  }

  getSDK() {
    return this.sdk;
  }
}
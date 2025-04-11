// src/app/services/totalum.service.ts
import { Injectable } from '@angular/core';
// Importamos el SDK de Totalum
// Tendrás que añadir las definiciones de tipos adecuadas para TypeScript
declare const require: any;
const totalum = require('totalum-api-sdk');

@Injectable({
  providedIn: 'root'
})
export class TotalumService {
  private totalumSdk: any;

  constructor() {
    // Inicializamos el SDK con la clave API
    const options = {
      apiKey: {
        'api-key': 'sk-eyJrZXkiOiI2NjI3NmQ4MTgzM2Y4YzU5OGUxZGFjY2YiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQgNmJ1cSIsIm9yZ2FuaXphdGlvbklkIjoiZWR3YXJkYXZpZC1wcnVlYmEtdGVjbmljYSJ9'
      }
    };
    this.totalumSdk = new totalum.TotalumApiSdk(options);
  }

  getSDK() {
    return this.totalumSdk;
  }

  async getItems(collection: string, page: number = 0, limit: number = 50, sort: any = { createdAt: 1 }) {
    try {
      const response = await this.totalumSdk.crud.getItems(collection, {
        sort: sort,
        pagination: {
          page: page,
          limit: limit
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${collection}:`, error);
      throw error;
    }
  }

  async getItemById(collection: string, id: string) {
    try {
      const response = await this.totalumSdk.crud.getItemById(collection, id);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${collection} with id ${id}:`, error);
      throw error;
    }
  }
}
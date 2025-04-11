import { Injectable } from '@angular/core';

// Mock de datos
const MOCK_DATA = {
  pedidos: [
    {
      numeroPedido: 'PED-001',
      importe: 150.50,
      importeImpuestos: 31.60,
      cantidadProductos: 3,
      fecha: new Date('2025-03-15'),
      nombreCliente: 'Juan Pérez'
    },
    {
      numeroPedido: 'PED-002',
      importe: 75.20,
      importeImpuestos: 15.80,
      cantidadProductos: 1,
      fecha: new Date('2025-03-20'),
      nombreCliente: 'María García'
    },
    {
      numeroPedido: 'PED-003',
      importe: 320.00,
      importeImpuestos: 67.20,
      cantidadProductos: 5,
      fecha: new Date('2025-04-01'),
      nombreCliente: 'Carlos Rodríguez'
    }
  ],
  clientes: [
    {
      id: 'C-001',
      nombre: 'Juan Pérez',
      fechaNacimiento: new Date('1985-07-15'),
      email: 'juan.perez@ejemplo.com',
      telefono: '123-456-7890'
    },
    {
      id: 'C-002',
      nombre: 'María García',
      fechaNacimiento: new Date('1990-03-22'),
      email: 'maria.garcia@ejemplo.com',
      telefono: '234-567-8901'
    },
    {
      id: 'C-003',
      nombre: 'Carlos Rodríguez',
      fechaNacimiento: new Date('1978-11-05'),
      email: 'carlos.rodriguez@ejemplo.com',
      telefono: '345-678-9012'
    }
  ],
  productos: [
    {
      id: 'P-001',
      nombre: 'Laptop HP 15"',
      precio: 799.99,
      categoria: 'Electrónica',
      cantidad: 10
    },
    {
      id: 'P-002',
      nombre: 'Smartphone Samsung Galaxy',
      precio: 549.99,
      categoria: 'Electrónica',
      cantidad: 15
    },
    {
      id: 'P-003',
      nombre: 'Audífonos Bluetooth',
      precio: 99.99,
      categoria: 'Accesorios',
      cantidad: 30
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class TotalumService {
  constructor() {}

  getSDK() {
    // Creamos un objeto SDK mock que imite la funcionalidad de TOTALUM
    return {
      collection: (collectionName: string) => {
        return {
          get: async () => {
            
            return MOCK_DATA[collectionName as keyof typeof MOCK_DATA] || [];
          },
          doc: (id: string) => {
            return {
              get: async () => {
               
                const collection = MOCK_DATA[collectionName as keyof typeof MOCK_DATA] || [];
                return collection.find((item: any) => {
                  if (collectionName === 'pedidos') {
                    return item.numeroPedido === id;
                  }
                  return item.id === id;
                });
              }
            };
          }
        };
      }
    };
  }
}
// src/app/utils/data-adapter.ts
import { Cliente } from '../models/cliente';
import { Pedido } from '../models/pedido';
import { Producto } from '../models/producto';

export class DataAdapter {
  /**
   * Adapta los datos de clientes recibidos de la API al formato esperado por la aplicación
   */
  static adaptClientes(clientesApi: any[]): Cliente[] {
    return clientesApi.map(cliente => ({
      id: cliente._id || cliente.id, // Asumimos que la API devuelve _id o id
      nombre: cliente.nombre,
      fechaNacimiento: new Date(cliente.fechaNacimiento),
      email: cliente.email,
      telefono: cliente.telefono
    }));
  }

  /**
   * Adapta los datos de pedidos recibidos de la API al formato esperado por la aplicación
   */
  static adaptPedidos(pedidosApi: any[]): Pedido[] {
    return pedidosApi.map(pedido => ({
      numeroPedido: pedido._id || pedido.numeroPedido,
      importe: pedido.importe,
      importeImpuestos: pedido.importeImpuestos,
      cantidadProductos: pedido.cantidadProductos,
      fecha: new Date(pedido.fecha),
      nombreCliente: pedido.nombreCliente
    }));
  }

  /**
   * Adapta los datos de productos recibidos de la API al formato esperado por la aplicación
   */
  static adaptProductos(productosApi: any[]): Producto[] {
    return productosApi.map(producto => ({
      id: producto._id || producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      cantidad: producto.cantidad
    }));
  }

  /**
   * Adapta un cliente individual recibido de la API
   */
  static adaptCliente(clienteApi: any): Cliente {
    return {
      id: clienteApi._id || clienteApi.id,
      nombre: clienteApi.nombre,
      fechaNacimiento: new Date(clienteApi.fechaNacimiento),
      email: clienteApi.email,
      telefono: clienteApi.telefono
    };
  }

  /**
   * Adapta un pedido individual recibido de la API
   */
  static adaptPedido(pedidoApi: any): Pedido {
    return {
      numeroPedido: pedidoApi._id || pedidoApi.numeroPedido,
      importe: pedidoApi.importe,
      importeImpuestos: pedidoApi.importeImpuestos,
      cantidadProductos: pedidoApi.cantidadProductos,
      fecha: new Date(pedidoApi.fecha),
      nombreCliente: pedidoApi.nombreCliente
    };
  }

  /**
   * Adapta un producto individual recibido de la API
   */
  static adaptProducto(productoApi: any): Producto {
    return {
      id: productoApi._id || productoApi.id,
      nombre: productoApi.nombre,
      precio: productoApi.precio,
      categoria: productoApi.categoria,
      cantidad: productoApi.cantidad
    };
  }
}
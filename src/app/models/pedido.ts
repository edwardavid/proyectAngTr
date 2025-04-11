export interface Pedido {
    numeroPedido: string;
    importe: number;
    importeImpuestos: number;
    cantidadProductos: number;
    fecha: Date;
    nombreCliente: string;
  }
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
  { 
    path: 'pedidos', 
    loadChildren: () => import('./modules/pedidos/pedidos.module').then(m => m.PedidosModule) 
  },
  { 
    path: 'clientes', 
    loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule) 
  },
  { 
    path: 'productos', 
    loadChildren: () => import('./modules/productos/productos.module').then(m => m.ProductosModule) 
  },
  { path: '**', redirectTo: 'pedidos' }
];
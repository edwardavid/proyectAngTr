import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { PedidosDetailComponent } from './pedidos-detail/pedidos-detail.component';

const routes: Routes = [
  { path: '', component: PedidosListComponent },
  { path: ':id', component: PedidosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
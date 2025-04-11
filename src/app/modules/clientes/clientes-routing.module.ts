import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';

const routes: Routes = [
  { path: '', component: ClientesListComponent },
  { path: ':id', component: ClientesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
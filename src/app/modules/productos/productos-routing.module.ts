import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';

const routes: Routes = [
  { path: '', component: ProductosListComponent },
  { path: ':id', component: ProductosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
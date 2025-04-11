import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProductosListComponent,
    ProductosDetailComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ProductosModule { }
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from '../../../models/producto';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'precio', 'categoria', 'cantidad'];
  dataSource!: MatTableDataSource<Producto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productosService.getProductos().subscribe(
      (productos: Producto[]) => {
        this.dataSource = new MatTableDataSource(productos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectRow(row: Producto): void {
    this.router.navigate(['/productos', row.id]);
  }
}
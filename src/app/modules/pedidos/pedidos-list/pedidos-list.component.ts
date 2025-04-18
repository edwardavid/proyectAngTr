// src/app/modules/pedidos/pedidos-list/pedidos-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Pedido } from '../../../models/pedido';
import { PedidosService } from '../../../services/pedidos.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent implements OnInit {
  displayedColumns: string[] = ['numeroPedido', 'importe', 'importeImpuestos', 'cantidadProductos', 'fecha', 'nombreCliente'];
  dataSource!: MatTableDataSource<Pedido>;
  isLoading = false;
  error: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private pedidosService: PedidosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos(): void {
    this.isLoading = true;
    this.error = null;
    
    this.pedidosService.getPedidos()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (pedidos: Pedido[]) => {
          this.dataSource = new MatTableDataSource(pedidos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.error('Error al obtener los pedidos', error);
          this.error = 'Error al cargar los pedidos. Por favor, intente nuevamente.';
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

  selectRow(row: Pedido): void {
    this.router.navigate(['/pedidos', row.numeroPedido]);
  }

  retry(): void {
    this.loadPedidos();
  }
}
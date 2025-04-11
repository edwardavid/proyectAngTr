import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'fechaNacimiento', 'email', 'telefono'];
  dataSource!: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clientesService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        this.dataSource = new MatTableDataSource(clientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error al obtener los clientes', error);
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

  selectRow(row: Cliente): void {
    this.router.navigate(['/clientes', row.id]);
  }
}
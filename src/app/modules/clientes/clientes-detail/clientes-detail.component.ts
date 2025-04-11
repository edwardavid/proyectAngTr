import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-clientes-detail',
  templateUrl: './clientes-detail.component.html',
  styleUrls: ['./clientes-detail.component.css']
})
export class ClientesDetailComponent implements OnInit {
  cliente!: Cliente;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.loadCliente();
    }
  }

  loadCliente(): void {
    this.clientesService.getCliente(this.id).subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
      },
      error => {
        console.error('Error al obtener el cliente', error);
      }
    );
  }
}
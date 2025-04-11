import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../../../services/pedidos.service';
import { Pedido } from '../../../models/pedido';

@Component({
  selector: 'app-pedidos-detail',
  templateUrl: './pedidos-detail.component.html',
  styleUrls: ['./pedidos-detail.component.css']
})
export class PedidosDetailComponent implements OnInit {
  pedido!: Pedido;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private pedidosService: PedidosService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.loadPedido();
    }
  }

  loadPedido(): void {
    this.pedidosService.getPedido(this.id).subscribe(
      (pedido: Pedido) => {
        this.pedido = pedido;
      },
      error => {
        console.error('Error al obtener el pedido', error);
      }
    );
  }
}
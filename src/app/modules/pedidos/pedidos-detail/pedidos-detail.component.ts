import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
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
  isLoading = false;  // Añadida esta propiedad
  error: string | null = null;  // Añadida esta propiedad

  constructor(
    private route: ActivatedRoute,
    private router: Router,  // Añadido el servicio Router
    private pedidosService: PedidosService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.loadPedido();
    } else {
      this.error = 'ID de pedido no válido';
    }
  }

  loadPedido(): void {
    this.isLoading = true;  // Establecer isLoading a true al iniciar la carga
    this.error = null;  // Reiniciar el error
    
    this.pedidosService.getPedido(this.id)
      .pipe(finalize(() => this.isLoading = false))  // Establecer isLoading a false cuando termine
      .subscribe(
        (pedido: Pedido) => {
          this.pedido = pedido;
        },
        error => {
          console.error('Error al obtener el pedido', error);
          this.error = 'Error al cargar los datos del pedido. Por favor, intente nuevamente.';
        }
      );
  }

  // Añadidos estos métodos que se usan en el HTML
  retry(): void {
    this.loadPedido();
  }

  volver(): void {
    this.router.navigate(['/pedidos']);
  }
}
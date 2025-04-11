import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-productos-detail',
  templateUrl: './productos-detail.component.html',
  styleUrls: ['./productos-detail.component.css']
})
export class ProductosDetailComponent implements OnInit {
  producto!: Producto;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.loadProducto();
    }
  }

  loadProducto(): void {
    this.productosService.getProducto(this.id).subscribe(
      (producto: Producto) => {
        this.producto = producto;
      },
      error => {
        console.error('Error al obtener el producto', error);
      }
    );
  }
}
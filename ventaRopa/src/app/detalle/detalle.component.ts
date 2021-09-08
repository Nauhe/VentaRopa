import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  producto: any;

  constructor(private router:Router , private servicioProducto: ProductosService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.producto = this.servicioProducto.getProducto();
  }

 
  ponerColor(p: any, color: string){
    p.foto = this.servicioProducto.cambiarColor(p.foto,color );
   
  }

  agregarCarrito(prod:any){
    this.carritoService.agregarProd(prod);
  }


}

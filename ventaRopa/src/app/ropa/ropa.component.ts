import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent implements OnInit {

  @Input() titulo: string= "";
  @Input() productos: any[];
  

  constructor(private router:Router,private servicioProducto: ProductosService,
  private carritoService:CarritoService) { }
  

  ngOnInit(): void {    
  }

  irDetalle(prod){
    this.servicioProducto.setProducto(prod);
    this.router.navigate(['detalle']);
  }

  ponerColor(producto: any,color: string){
   producto.foto = this.servicioProducto.cambiarColor(producto.foto, color);

  }
  agregarCarrito(prod:any){
    prod.cant +=1;
    this.carritoService.agregarProd(prod);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agrego el producto al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  }


}

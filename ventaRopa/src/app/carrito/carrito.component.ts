import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import * as _ from 'lodash';
import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productoCarrito: any[]=new Array();
  contador:number=0;
  


  constructor(private carritoService: CarritoService, private servicioProducto: ProductosService) { }

  ngOnInit(): void {
    this.productoCarrito = this.carritoService.dameProd();
  }

 
  contarProd(){
 this.carritoService.agregarProd;
  }


  quitarProd(productoCarrito){
  console.log(productoCarrito);
  console.log(this.productoCarrito.splice(productoCarrito, 1))
}

   vaciarCarrito(){
    this.carritoService.vaciarCarrito();
    this.productoCarrito = this.carritoService.dameProd();

  }

  

}

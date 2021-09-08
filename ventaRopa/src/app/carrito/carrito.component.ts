import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import * as _ from 'lodash';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productoCarrito: any[]=new Array();


  constructor(private carritoService: CarritoService, private servicioProducto: ProductosService) { }

  ngOnInit(): void {
    this.productoCarrito = this.carritoService.dameProd();
  }

 
  contarProd(){

  }


  //hacer funcion para contar productos.
quitarProd(productoCarrito){
  console.log(productoCarrito);
  console.log(this.productoCarrito.splice(productoCarrito, 1))
}

  vaciarCarrito(productoCarrito: any[]){
    console.log(productoCarrito);
    console.log(this.productoCarrito.splice(0));
  }
  

}

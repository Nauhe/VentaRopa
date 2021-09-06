import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productoCarrito: any[]=new Array();


  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.productoCarrito = this.carritoService.dameProd();
  }



  //hacer funcion para contar productos.
  //hacer funcion para agregar quitar.

}

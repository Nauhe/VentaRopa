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
  total:number= 0;
  
  constructor(private carritoService: CarritoService, private servicioProducto: ProductosService) { }

  ngOnInit(): void {
    this.productoCarrito = this.carritoService.dameProd();
    this.contarTotal();
  }

  contarTotal(){
    console.log("total: ",);
    this.total = 0;
    this.productoCarrito.forEach(i=>{
    this.total = this.total + (i.precio*i.cant);
    })
           
    }
  
  quitarProd(productoCarrito){
  console.log(productoCarrito);
  console.log(this.productoCarrito.splice(productoCarrito, 1))
  this.contarTotal();
}

  vaciarCarrito() {
    Swal.fire({
      title: 'Seguro queres vaciar carrito??',
      text: "No vas a poder revertirlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Vaciado',
          'Tu carrito fue vaciado',
          'success'
        )
      }
    })
    this.carritoService.vaciarCarrito();
    this.productoCarrito = this.carritoService.dameProd();
  

  }

  contarSubtotal(productoCarrito) {
    console.log(productoCarrito);
    console.log(this.productoCarrito.splice(productoCarrito, 1))
  }




}

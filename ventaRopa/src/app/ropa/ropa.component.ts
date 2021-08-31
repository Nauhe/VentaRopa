import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent implements OnInit {

  @Input() titulo: string= "";
  @Input() productos: any[];

  constructor(private router:Router,private servicioProducto: ProductosService) { }
  

  ngOnInit(): void {
  }

  irDetalle(prod){
    console.log(prod);
    this.servicioProducto.productoSeleccionado = prod;
    this.router.navigate(['detalle']);
  }

  ponerColor(color, producto){
    if(color =="blanco"){
      producto.foto= "assets/Remera_mujerBlanca.jpg"
    }else{
      producto.foto="assets/remera_mujerNegra.jpg"
    }
  }


}

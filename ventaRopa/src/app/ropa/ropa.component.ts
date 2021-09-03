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
    this.servicioProducto.productoSeleccionado = prod;
    this.router.navigate(['detalle']);
  }

  
  ponerColor(producto: any,color: string){
   producto.foto = this.servicioProducto.cambiarColor(producto.foto, color);

  }


}

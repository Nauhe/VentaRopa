import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  producto: any;

  constructor(private router:Router , private servicioProducto: ProductosService) { }

  ngOnInit(): void {
    this.producto = this.servicioProducto.getProducto();
  }

 
  ponerColor(p: any, color: string){
    p.foto = this.servicioProducto.cambiarColor(p.foto,color );
   
  }


}

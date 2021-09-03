import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  tituloMujer= "Mujer"; 

  
  productoMujer: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000,
    foto: 'assets/remMujer_negro.jpg' ,
    detalle: " CONFECCIONADA CON HILO DE ALGODÓN, LO QUE LA HACE UNA PRENDA FRESCA, LIGERA Y MUY CÓMODA DE LLEVAR",
    id: 1, 
    cant: 0,
    talle: 1 , 
  }, 
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto:'assets/buzoMujer_negro.jpg',
    detalle: " BUZO CON CAPUCHA LISO, IDEAL PARA MEDIA ESTACIÓN.EN TELA FRISA"
  },
  {
    descripcion: 'Pantalon',
    precio: 5000,
    foto: 'assets/pantMujer_negro.jpg'
  },
  ]

  productoHombre: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000,
    foto: 'assets/remHombre_negro.jpg',
    detalle: " CONFECCIONADA CON HILO DE ALGODÓN, LO QUE LA HACE UNA PRENDA FRESCA, LIGERA Y MUY CÓMODA DE LLEVAR"
  },
  {
    descripcion: 'Campera',
    precio: 9000,
    foto: 'assets/campHombre_negro.jpg'
  },
  {
    descripcion: 'Pantalon',
    precio: 8000,
    foto: 'assets/pantHombre_negro.jpg'
  },
  ]

  productoNinio: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000,
    foto: 'assets/remNinio_negro.jpg',
    detalle: " CONFECCIONADA CON HILO DE ALGODÓN, LO QUE LA HACE UNA PRENDA FRESCA, LIGERA Y MUY CÓMODA DE LLEVAR"
  },
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto: 'assets/buzoNinio_negro.jpg',
    detalle: "BUZO CON CAPUCHA.ESTAMPADO EN FRENTE. EN TELA FRISA CON ELASTANO"
  },
  {
    descripcion: 'Pantalon',
    precio: 5000,
    foto: 'assets/pantNinio_negro.jpg'
  }
  ]


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

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
    detalle: "confeccionada con hilo de algodón, lo que la hace una prenda fresca, ligera y muy cómoda de llevar."
  },
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto:'assets/buzoMujer_negro.jpg'
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
    detalle:"confeccionada con hilo de algodón, lo que la hace una prenda fresca, ligera y muy cómoda de llevar."
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
    detalle: " Confeccionada con hilo de algodón, lo que la hace una prenda fresca, ligera y muy cómoda de llevar."
  },
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto: 'assets/buzoNinio_negro.jpg'
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

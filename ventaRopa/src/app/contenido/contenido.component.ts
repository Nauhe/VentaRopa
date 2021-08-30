import { Component, OnInit } from '@angular/core';

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
    foto: 'assets/remera_mujerNegra.jpg'  
  },
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto:'assets/buzo_mujerNegro.jpg'
  },
  {
    descripcion: 'Pantalon',
    precio: 5000,
    foto: 'assets/pant_mujerNegro.jpg'
  },
  ]

  productoHombre: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000,
    foto: 'assets/remera_hombreNegra.jpg'
  },
  {
    descripcion: 'Campera',
    precio: 9000,
    foto: 'assets/camp_hombreNegra.jpg'
  },
  {
    descripcion: 'Pantalon',
    precio: 8000,
    foto: 'assets/pantalon_hombreNegro.jpg'
  },
  ]

  productoNinio: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000,
    foto: 'assets/remera_niñoBlanca.jpg'
  },
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto: 'assets/buzo_niñoNegro.jpg'
  },
  {
    descripcion: 'Pantalon',
    precio: 5000,
    foto: 'assets/pant_niñoBlanco.jpg'
  }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

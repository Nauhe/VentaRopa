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
    precio: 2600,
    foto: 'assets/remMujer_negro.jpg' ,
    detalle: "REMERA DE ESCOTE PICO Y MANGA CORTA",
    id: 1, 
    cant: 0,
    talle: "" , 
  }, 
  {
    descripcion: 'Buzo',
    precio: 8000,
    foto:'assets/buzoMujer_negro.jpg',
    detalle: " BUZO CON CAPUCHA LISO, IDEAL PARA MEDIA ESTACIÓN.EN TELA FRISA",
    id: 2,
    cant: 0,
    talle: "",
  },
  {
    descripcion: 'Pantalon',
    precio: 5000,
    foto: 'assets/pantMujer_negro.jpg',
    detalle:"",
    id: 3, 
    cant: 0,
    talle: "" , 

  },
  ]

  productoHombre: any[] = [
    {
    descripcion: 'Remera',
    precio: 4600,
    foto: 'assets/remHombre_negro.jpg',
    detalle: "REMERA AMPLIA DE CUELLO REDONDO Y MANGA CORTA. ESTAMPACIÓN FRONTAL COMBINADA A CONTRASTE",
    id: 4, 
    cant: 0,
    talle: "" , 
  },
  {
    descripcion: 'Campera',
    precio: 7100,
    foto: 'assets/campHombre_negro.jpg',
    detalle:"CAMPERA AMPLIA DE CUELLO CON CAPUCHA AJUSTABLE Y MANGA LARGA. BOLSILLOS FRONTALES TIPO CANGURO. ACABADOS EN RIB. CIERRE FRONTAL CON CREMALLERA",
    id: 5, 
    cant: 0,
    talle: "" , 
  },
  {
    descripcion: 'Pantalon',
    precio: 5000,
    foto: 'assets/pantHombre_negro.jpg',
    detalle: "PANTALÓN SKINNY FIT. CINCO BOLSILLOS. CIERRE FRONTAL CON CREMALLERA Y BOTÓN.",
    id: 6, 
    cant: 0,
    talle: "" , 
  },
  ]

  productoNinio: any[] = [
    {
    descripcion: 'Remera',
    precio: 2100,
    foto: 'assets/remNinio_negro.jpg',
    detalle: "CAMISETA CUELLO REDONDO Y MANGA CORTA. ESTAMPADO TEXTO EN DELANTERO.",
    id: 7, 
    cant: 0,
    talle: "" , 
  },
  {
    descripcion: 'Camperas',
    precio: 4000,
    foto: 'assets/buzoNinio_negro.jpg',
    detalle: "CAMPERA CON CAPUCHA Y MANGA LARGA ACABADO PUÑO. CIERRE CREMALLERA FRONTAL. ESTAMPADO EN PECHERA. ACABADOS EN RIB",
    id: 8, 
    cant: 0,
    talle: "" , 
  },
  {
    descripcion: 'Pantalon',
    precio: 3400,
    foto: 'assets/pantNinio_negro.jpg',
    detalle: "PANTALÓN DE FELPA CON CINTURILLA ELÁSTICA Y CORDONES AJUSTABLES FRONTAL. BOLSILLOS EN DELANTERO CON DETALLE VIVOS Y TIPO PLASTRÓN EN ESPALDA. DETALLE CORTES",
    id: 9, 
    cant: 0,
    talle: "" , 
  }
  ]

  productoNinia: any[] = [
    {
    descripcion: 'Remera',
    precio: 2800,
    foto: 'assets/remNinia_negro.jpg',
    detalle: "CAMISETA CUELLO REDONDO Y MANGA LARGA. ESTAMPADO DISNEY. TEJIDO ESPECIAL SUAVE.",
    id: 10, 
    cant: 0,
    talle: "" , 
  },
  {
    descripcion: 'Buzo',
    precio: 4800,
    foto: 'assets/buzoNinia_negro.jpg',
    detalle: "BUZO CON CAPUCHA Y MANGA LARGA. ESTAMPADO DISNEY EN DELANTERO. DETALLE CORTES. ACABADOS EN RIB.",
    id: 11, 
    cant: 0,
    talle: "" , 
  },
  {
    descripcion: 'Pantalon',
    precio: 2500,
    foto: 'assets/pantNinia_negro.jpg',
    detalle: "PANTALÓN JOGGER CINTURA ELÁSTICA Y CORDÓN AJUSTABLE. BOLSILLOS DELANTEROS Y DETALLES EN LATERAL.",
    id: 12, 
    cant: 0,
    talle: "" , 
  }
  ]


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

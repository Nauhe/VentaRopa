import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ventaRopa';
  tituloMujer= "Mujer"; 

  
  productoMujer: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000
  },
  {
    descripcion: 'Buzo',
    precio: 8000
  },
  {
    descripcion: 'Pantalon',
    precio: 5000
  },
  ]

  productoHombre: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000
  },
  {
    descripcion: 'Campera',
    precio: 9000
  },
  {
    descripcion: 'Pantalon',
    precio: 8000
  },
  ]

  productoNinio: any[] = [
    {
    descripcion: 'Remera',
    precio: 2000
  },
  {
    descripcion: 'Buzo',
    precio: 8000
  },
  {
    descripcion: 'Pantalon',
    precio: 5000
  }
  ]


}

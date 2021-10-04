import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto.model';

@Component({
  selector: 'app-alta-prod',
  templateUrl: './alta-prod.component.html',
  styleUrls: ['./alta-prod.component.scss']
})
export class AltaProdComponent implements OnInit {
  productos: any;
  producto: Producto = new Producto();
  editar:boolean = false;
  cols: any[] = [
    {field: 'descripcion', header: 'Descripcion'},
    {field: 'detalle', header: 'Detalle'},
    {field: 'precio', header: 'Precio'},
    {field: 'cantidad', header: 'Cantidad'},
    {field: 'colores', header: 'Colores'}
  ]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.httpClient.get('http://localhost:3000/producto')
    .subscribe(informacion => {
      console.log(informacion);
      this.productos = informacion;
    });
  }

  altaProducto(){
    let body = {
      "descripcion": "Pantalon",
      "detalle": "Tiro bajo",
      "precio": 1500,
      "cantidad": 3,
      "talle": "XL",
      "foto": "foto",
      "colores": "negro,gris"
  };
    this.httpClient.post("http://localhost:3000/producto", body)
    .subscribe(respuesta => {
      console.log("RESPUSTA DE ALTA: ", respuesta);
    });
  }

  modificarProducto(){
    let body = {
      "descripcion": "Pantalon Corto",
      "detalle": "Tiro bajo",
      "precio": 2500,
      "cantidad": 3,
      "talle": "XL",
      "foto": "foto",
      "colores": "negro,gris"
  };
    this.httpClient.put("http://localhost:3000/producto/3", body)
    .subscribe( respuesta => {
      console.log(respuesta);
    });
  }

  eliminarProducto(){
    this.httpClient.delete("http://localhost:3000/producto/3")
    .subscribe( respuesta => {
      console.log(respuesta);
    });
  }

  altaProdDinamico(){
    this.httpClient.post('http://localhost:3000/producto', this.producto)
    .subscribe( respuesta => {
      console.log(respuesta);
    });
  }

  editarProductoDinamico(rowData?){
    console.log("INFORMACION : ", rowData);
    this.producto = rowData;
    this.editar = true;
  }
}

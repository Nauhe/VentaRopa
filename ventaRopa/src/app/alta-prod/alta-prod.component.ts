import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto.model';
import { ProductosService } from '../productos.service';

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
    {field: 'talle', header:'talle'},
    {field: 'cantidad', header: 'Cantidad'},
    {field: 'colores', header: 'Colores'}
  ]

  constructor(private httpClient: HttpClient, private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.traerProd()
    .subscribe(informacion => {
      console.log(informacion);
      this.productos = informacion;
    });
  }

  altaProducto(){
    this.httpClient.post("http://localhost:3000/producto", this.producto)
    .subscribe(respuesta => {
      console.log("RESPUSTA DE ALTA: ", respuesta);
    });
  };

  modificarProducto(){
    this.productoService.putProd(this.producto.id, this.producto)
    .subscribe( respuesta => {
      console.log(respuesta);
    });
  };

  eliminarProducto(){
    this.httpClient.delete("http://localhost:3000/producto/"+this.producto.id)
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto.model';
import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2';

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

  modificarProducto(){
    this.productoService.putProd(this.producto.id, this.producto)
    .subscribe( respuesta => {
      console.log(respuesta);
    });
  };

  eliminarProducto(producto){
    let mensaje = "Eliminar producto" + producto.descripcion + "?";
    Swal.fire({
      title: 'Estas seguro?',
      text: mensaje,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.httpClient.delete("http://localhost:3000/producto/"+producto.id)
        .subscribe( respuesta => {
          let r:any = respuesta; 
          if (r.affected == 1){
            Swal.fire(
              'Eliminar',
              'Producto eliminado',
              'success'
            )
          }
        });
      }
    })
  }

  altaProdDinamico(){
    this.httpClient.post('http://localhost:3000/producto', this.producto)
    .subscribe( respuesta => {
      this.productos.push(respuesta);
      this.limpiarProducto();
    });
  }

  editarProductoDinamico(rowData?){
    console.log("INFORMACION : ", rowData);
    this.producto = rowData;
    this.editar = true;
  }

  private limpiarProducto(){
    this.producto = new Producto();
  }

  cancelarModificacion(){
    this.limpiarProducto();
    this.editar = false;
  }
}

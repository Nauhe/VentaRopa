import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cantProductos: any[] = new Array();
 
  
  
  constructor() { }

  agregarProd(producto:any){
    let estaProd:boolean=false;
    this.cantProductos.forEach(i=>{
      if(i.id == producto.id){
        estaProd= !estaProd;
        i.cant+=producto.cant;
      }
    });
    if(!estaProd){
      this.cantProductos.push(producto);
      console.log(this.cantProductos);
    }
  }

  dameProd(){
    return this.cantProductos;
  }

vaciarCarrito(){
  this.cantProductos= new Array();
}




}

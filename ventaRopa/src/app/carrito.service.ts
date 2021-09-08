import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cantProductos: any[] = new Array();

  constructor() { }

  agregarProd(producto:any){
    
    this.cantProductos.push(producto);
    console.log(this.cantProductos);
  }

  dameProd(){
    return this.cantProductos;
  }




}

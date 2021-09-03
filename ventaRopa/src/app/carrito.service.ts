import { Injectable } from '@angular/core';

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

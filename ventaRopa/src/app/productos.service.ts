import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
const URL_PRODUCTO = "/producto"

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productoSeleccionado;

  constructor(private httpService: HttpService ) { }

  traerProd(){
    return this.httpService.get(URL_PRODUCTO);
  }

  putProd(id ,prod){
    return this.httpService.put(URL_PRODUCTO +"/"+ id , prod);
  }



  cambiarColor(imagen: string, color: string): string {
    imagen = imagen.substr(0, imagen.length - 9);
    switch (color){
      case 'negro': 
        imagen += "negro.jpg";
        break
      case 'blanc': 
        imagen += "blanc.jpg";
        break
      case 'griss': 
        imagen += "griss.jpg";
        break
      case 'celes': 
        imagen += "celes.jpg";
        break
      case 'beige': 
        imagen += "beige.jpg";
        break
    }
    return imagen;

  }
  setProducto(prod) {
    this.productoSeleccionado = prod;
  }

  getProducto() {
    return this.productoSeleccionado;
  }

}



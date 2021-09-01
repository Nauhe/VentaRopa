import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
public productoSeleccionado;

  constructor() { }

cambiarColor(imagen:string, color: string):string{
  imagen = imagen.substr (0,imagen.length - 9);
  if(color== "n"){
    imagen+="negro.jpg";
  }else{
    imagen+="blanc.jpg";
  }  
  return imagen;

}


}



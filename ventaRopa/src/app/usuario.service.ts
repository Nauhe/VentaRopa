import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
const URL_USUARIO = "/user";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpService: HttpService) { }


  dameUsuario(){
  return this.httpService.get(URL_USUARIO);
  }
}

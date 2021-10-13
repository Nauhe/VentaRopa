import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL_BASE: string = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  get(cont:string){
    return this.httpClient.get(URL_BASE + cont)
  };

  post(cont:string,body){
    

  };

  put(cont:string ,body){
    return this.httpClient.put(URL_BASE + cont, body);

  };

  delete(){

  };

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient}from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  navegar(donde:string){
    this.router.navigate([donde]);
  }

  pruebaBackend(){
    this.httpClient.get("http://localhost:3000/user").subscribe(datos =>{
      console.log(datos);
    })
  }

}

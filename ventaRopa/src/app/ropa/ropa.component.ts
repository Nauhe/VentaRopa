import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent implements OnInit {

  @Input() titulo: string= "";
  @Input() productos: any[];

  constructor() { }
  

  ngOnInit(): void {
  }

}

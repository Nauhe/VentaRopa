import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RopaComponent } from './ropa/ropa.component';
import { TableModule } from 'primeng/table';
import { ContenidoComponent } from './contenido/contenido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AltaProdComponent } from './alta-prod/alta-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RopaComponent,
    ContenidoComponent,
    CarritoComponent,
    AltaProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

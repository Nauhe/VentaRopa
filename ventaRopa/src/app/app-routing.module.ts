import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProdComponent } from './alta-prod/alta-prod.component';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'alta-prod',
    component: AltaProdComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

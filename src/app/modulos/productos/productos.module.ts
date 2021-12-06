import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { FormularioInscripcionesComponent } from './formulario-inscripciones/formulario-inscripciones.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    FormularioInscripcionesComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }

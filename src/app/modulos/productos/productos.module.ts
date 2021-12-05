import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { PlanesComponent } from './planes/planes.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { ListarPlanComponent } from './planes/listar-plan/listar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    PlanesComponent,
    CrearPlanComponent,
    ListarPlanComponent,
    BuscarPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }

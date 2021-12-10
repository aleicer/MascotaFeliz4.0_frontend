import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { FormularioInscripcionesComponent } from './formulario-inscripciones/formulario-inscripciones.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';


const routes: Routes = [
  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path:'formulario-inscripciones',
    component: FormularioInscripcionesComponent
  },
  
  {
    path:"crear-plan",
    component: CrearPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path: "buscar-clientes",
    component: BuscarClienteComponent  
  },
  {
    path: "crear-cliente",
    component: CrearClienteComponent
  },
  {
    path: "editar-cliente/:id",
    component: EditarClienteComponent  
  },
  {
    path: "eliminar-cliente/:id",
    component: EliminarClienteComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

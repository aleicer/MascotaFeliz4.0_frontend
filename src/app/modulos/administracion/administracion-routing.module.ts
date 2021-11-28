import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';

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
    path: "editar-cliente:id",
    component: EditarClienteComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

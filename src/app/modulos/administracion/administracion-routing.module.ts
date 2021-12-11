import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';

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
    path: "listar-mascotas",
    component: BuscarMascotaComponent
  },
  {
    path: "crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "editar-mascota/:id",
    component: EditarMascotaComponent 
  },
  {
    path: "listar-empleados",
    component: BuscarEmpleadoComponent
  },
  {
    path: "crear-empleado",
    component: CrearEmpleadoComponent
  },
  {
    path: "editar-empleado/:id",
    component: EditarEmpleadoComponent 
  },
  {
    path: "listar-planes",
    component: BuscarPlanComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "editar-plan/:id",
    component: EditarPlanComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

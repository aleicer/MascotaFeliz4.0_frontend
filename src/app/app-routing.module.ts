import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './modulos/administracion/clientes/clientes.component';
import { CrearClienteComponent } from './modulos/administracion/clientes/crear-cliente/crear-cliente.component';
import { ErrorComponent } from './nav-footer/error/error.component';
import { InicioComponent } from './nav-footer/inicio/inicio.component';

const routes: Routes = [

  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo:"/inicio"
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

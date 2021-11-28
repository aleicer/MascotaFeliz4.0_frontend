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
    path: "seguridad",
    loadChildren: ()=>import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: ()=>import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: "productos",
    loadChildren: ()=>import("./modulos/productos/productos.module").then(x => x.ProductosModule)
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

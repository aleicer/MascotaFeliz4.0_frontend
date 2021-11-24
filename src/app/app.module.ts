import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BarraNavegacionComponent } from './nav-footer/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './nav-footer/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    BuscarClienteComponent,
    EliminarClienteComponent,
    BarraNavegacionComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

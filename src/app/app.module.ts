import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './modulos/administracion/clientes/clientes.component';
import { BarraNavegacionComponent } from './nav-footer/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './nav-footer/pie-pagina/pie-pagina.component';
import { ErrorComponent } from './nav-footer/error/error.component';
import { InicioComponent } from './nav-footer/inicio/inicio.component';
import {  FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    ErrorComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

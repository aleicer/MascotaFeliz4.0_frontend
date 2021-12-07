import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificacion } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  rol: number= 0;
  seInicioSesion : boolean= false;
  subs : Subscription = new Subscription();
  constructor(private seguridadServicio : SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.OptenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificacion) =>{
      this.seInicioSesion = datos.estaIdentificado;
      switch(datos.datos?.rol){
        case "619511b6fda2f8337ccf426c":
          this.rol= 1; //IDENTIFICACION DE ADMINISTRADOR
          break;
        case "619511c4fda2f8337ccf426d":
          this.rol= 2;//IDENTIFICACION DE EMPLEADO
          break;
        case "619511d0fda2f8337ccf426e":
          this.rol= 3;//IDENTIFICACION DE CLIENTE
          break;
        default:
          this.rol= 0; //sin ningun inicio de sesion 
      }
    })
  }

}

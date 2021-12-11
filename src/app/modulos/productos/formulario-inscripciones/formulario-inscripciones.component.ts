import { Component, OnInit } from '@angular/core';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ModelFormularioInscripcion } from 'src/app/modelos/formulario-inscripcion';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FormularioInscripcionService } from 'src/app/servicios/formulario-inscripcion.service';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-formulario-inscripciones',
  templateUrl: './formulario-inscripciones.component.html',
  styleUrls: ['./formulario-inscripciones.component.css']
})
export class FormularioInscripcionesComponent implements OnInit {

  listadoClientes: ModeloCliente[]=[];
  listadoMascotas: ModeloMascota[] =[];
  listadoSolicitudes: ModelFormularioInscripcion[]=[];
  

  constructor(private formularioServicio: FormularioInscripcionService,
              private mascotaServicio: MascotaService,
              private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.OptenerListadoInscripciones()
  }
  
  //OPTENEMOS LISTA DE FORMURIOS
  OptenerListadoInscripciones() {
    this.formularioServicio.ObtenerRegistro().subscribe((datos: ModelFormularioInscripcion[]) =>{
      this.listadoSolicitudes = datos;
    },(Error)=>{
      alert("No es posible optener la lista")
    })
   }

}


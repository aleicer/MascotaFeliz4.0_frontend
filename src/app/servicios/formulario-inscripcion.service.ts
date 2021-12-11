import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { ModelFormularioInscripcion } from '../modelos/formulario-inscripcion';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { ClienteService } from './cliente.service';
import { MascotaService } from './mascota.service';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioInscripcionService {

  url = "http://localhost:3000"
  token : string= "";

  constructor(private http: HttpClient,
              private seguridadServicio : SeguridadService) { 
                this.token = this.seguridadServicio.ObtenerToken();
    }

    ObtenerRegistro(): Observable<ModelFormularioInscripcion[]>{
      return this.http.get<ModelFormularioInscripcion[]>(`${this.url}/formulario-inscripcion?filter[include][0]=mascota&filter[include][1]=cliente`)
    }

    ModeloMascotaCliente(solicitud: ModelFormularioInscripcion){
      return this.http.get<ModeloMascota>(`${this.url}/mascotas/${solicitud.mascotaId}?filter[include][][relation]=cliente`)
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelFormularioInscripcion } from '../modelos/formulario-inscripcion';
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
      return this.http.get<ModelFormularioInscripcion[]>(`${this.url}/formulario-inscripcion`)
    }


}

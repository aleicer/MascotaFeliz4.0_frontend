import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { ModelFormularioInscripcion } from '../modelos/formulario-inscripcion';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url = 'http://localhost:3000'
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`)
  }

  ObtenerRegistrosPorId(id: string): Observable<ModeloMascota>{
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`)
  }

  CrearMascota(mascota: ModeloMascota): Observable<ModeloMascota>{
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarMascota(mascota: ModeloMascota): Observable<ModeloMascota>{
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.id}`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarMascota(modelo: ModeloMascota): Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${modelo.id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  CrearFormularioInscripcion(formulario: ModelFormularioInscripcion){
    return this.http.post<ModelFormularioInscripcion>(`${this.url}/formulario-inscripcion`, formulario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}

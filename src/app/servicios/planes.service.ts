import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelPlan } from '../modelos/plan.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  url = "http://localhost:3000"
  token : string= "";

  constructor(private http: HttpClient,
              private seguridadServicio : SeguridadService) { 
                this.token = this.seguridadServicio.ObtenerToken();
              }

  ObtenerRegistro(): Observable<ModelPlan[]>{
    return this.http.get<ModelPlan[]>(`${this.url}/plans`)
  }

  ObtenerRegistroPorId(id: string): Observable<ModelPlan>{
    return this.http.get<ModelPlan>(`${this.url}/plans/${id}`)
  }

  CrearPlan(plan: ModelPlan): Observable<ModelPlan>{
    return this.http.post<ModelPlan>(`${this.url}/plans`, plan,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarPlan(plan: ModelPlan): Observable<ModelPlan>{
    return this.http.put<ModelPlan>(`${this.url}/plans/${plan.id}`, plan,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarPlan(plan: ModelPlan): Observable<any>{
    return this.http.delete(`${this.url}/plans/${plan.id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}

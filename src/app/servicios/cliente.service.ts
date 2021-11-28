import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:3000"
  token : string= "";

  constructor(private http: HttpClient,
              private seguridadServicio : SeguridadService) { 
                this.token = this.seguridadServicio.ObtenerToken();
              }

  ObtenerRegistro(): Observable<ModeloCliente[]>{
    return this.http.get<ModeloCliente[]>(`${this.url}/clientes`)
  }

  CrearCliente(cliente: ModeloCliente): Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(`${this.url}/clientes`, cliente,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarCliente(cliente: ModeloCliente): Observable<ModeloCliente>{
    return this.http.put<ModeloCliente>(`${this.url}/clientes`, cliente,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarCliente(id: string): Observable<any>{
    return this.http.delete(`${this.url}/clientes/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}

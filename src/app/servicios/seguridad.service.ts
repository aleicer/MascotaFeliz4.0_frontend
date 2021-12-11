import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificacion } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url= "http://localhost:3000";
  datosUsuarioEnSesion= new BehaviorSubject<ModeloIdentificacion>(new ModeloIdentificacion())
  constructor( private http : HttpClient) {
    this.VerificarSesionActual();
  }

  VerificarSesionActual(){
    let datos = this.OptenerInfomacionSesion();
    if (datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificacion){
    this.datosUsuarioEnSesion.next(datos);
  }

  OptenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  //llamado identificacion de cliente 
  Identificar(usuario: string, clave: string): Observable<ModeloIdentificacion>{
    return this.http.post<ModeloIdentificacion>(`${this.url}/identificarCliente`,{
        usuario: usuario,
        clave: clave
        },{
          headers: new HttpHeaders({
            })
        })
  }
  
  //peticion para llado identificacion empleado
  IdentificarEmpleado(usuario: string, clave: string): Observable<ModeloIdentificacion>{
    return this.http.post<ModeloIdentificacion>(`${this.url}/identificarAdministrador-empleado`,{
        usuario: usuario,
        clave: clave
        },{
          headers: new HttpHeaders({
            })
        })
  }

  AlmacenarSesion(datos: ModeloIdentificacion){
    datos.estaIdentificado = true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos)
    this.RefrescarDatosSesion(datos);
  }

  OptenerInfomacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString)
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificacion());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString)
      return datos.tk;
    }else{
      return "";
    }
  }

  ObtenerId(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString)
      return datos.datos.id;
    }else{
      return "";
    }
  }

  ObtenerRol(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString)
      return datos.datos.rol;
    }else{
      return "";
    }
  }
  ObtenerCorreo(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString)
      return datos.datos.correo;
    }else{
      return "";
    }
  }
}

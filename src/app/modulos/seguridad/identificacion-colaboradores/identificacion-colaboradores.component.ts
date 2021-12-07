import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-identificacion-colaboradores',
  templateUrl: './identificacion-colaboradores.component.html',
  styleUrls: ['./identificacion-colaboradores.component.css']
})
export class IdentificacionColaboradoresComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    "usuario": ['', [Validators.required, Validators.email]],
    "clave": ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
              private servicioSeguridad: SeguridadService,
              private router: Router,
              private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  identificarEmpleado(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
      this.servicioSeguridad.IdentificarEmpleado(usuario, claveCifrada).subscribe((datos: any) =>{
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    },(Error: any)=>{
      alert('Error iniciando sesion, credenciales invalidas');
    })
    
  }

}

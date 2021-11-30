import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'sexo':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'ciudad':['',[Validators.required]],
    'clave':['',[Validators.required]],
    'correo':['',[Validators.required]],
  });

  constructor( private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  GuardarCliente(){
    let c = new ModeloCliente();
    let telefono = this.fgValidador.controls["telefono"].value;
    let documento = this.fgValidador.controls["documento"].value;
    c.nombre= this.fgValidador.controls["nombres"].value;
    c.apellido = this.fgValidador.controls["apellidos"].value;
    c.identificacion = (documento).toString();
    c.sexo = this.fgValidador.controls["sexo"].value;
    c.direccion = this.fgValidador.controls["direccion"].value;
    c.telefono = (telefono).toString();
    c.ciudad = this.fgValidador.controls["ciudad"].value;
    c.clave = this.fgValidador.controls["clave"].value;
    c.correo = this.fgValidador.controls["correo"].value;
    c.idRol= "619511d0fda2f8337ccf426e";
    this.servicioCliente.CrearCliente(c).subscribe((datos: ModeloCliente)=>{
      alert("Usuario Creado");
      this.router.navigate(["/administracion/buscar-clientes"]);
    }),(error : any)=>{
      alert("Error al crear Usuario");
    }

  }
}

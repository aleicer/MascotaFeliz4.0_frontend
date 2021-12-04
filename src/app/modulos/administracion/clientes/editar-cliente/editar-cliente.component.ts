import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  id: string="";

  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"]
    this.BucarCliente()
  }

  BucarCliente(){
    this.servicioCliente.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloCliente)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellido);
      this.fgValidador.controls["documento"].setValue(datos.identificacion);
      this.fgValidador.controls["sexo"].setValue(datos.sexo);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["clave"].setValue(datos.clave);
      this.fgValidador.controls["correo"].setValue(datos.correo);
    })
  }
  
  EditarCliente(){
    let c = new ModeloCliente();
    let documento = this.fgValidador.controls["documento"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    c.id= this.id;
    c.nombre= this.fgValidador.controls["nombres"].value;
    c.apellido = this.fgValidador.controls["apellidos"].value;
    c.identificacion = (documento).toString();
    c.sexo = this.fgValidador.controls["sexo"].value;
    c.direccion = this.fgValidador.controls["direccion"].value;
    c.telefono = (telefono).toString();
    c.ciudad = this.fgValidador.controls["ciudad"].value;
    c.clave = this.fgValidador.controls["clave"].value;
    c.correo = this.fgValidador.controls["correo"].value;
    c.rolId= "619511d0fda2f8337ccf426e";
    this.servicioCliente.ActualizarCliente(c).subscribe((datos: ModeloCliente)=>{
      alert("Usuario Actualido");
      this.router.navigate(["/administracion/buscar-clientes"]);
    }),(error : any)=>{
      alert("Error al Actualizar Usuario");
    }

  }

}

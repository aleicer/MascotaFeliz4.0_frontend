import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'fechaInicio': ['', [Validators.required]],
    'cargo': ['', [Validators.required]],
    'departamento': ['', [Validators.required]],
    'nivel': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'sexo': ['', [Validators.required]],
    'correo': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpleado();
  }

  BuscarEmpleado(){
    this.servicioEmpleado.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloEmpleado) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["identificacion"].setValue(datos.identificacion);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["fechaInicio"].setValue(datos.fechaInicio);
      this.fgValidador.controls["cargo"].setValue(datos.cargo);
      this.fgValidador.controls["departamento"].setValue(datos.departamento);
      this.fgValidador.controls["nivel"].setValue(datos.nivel);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["sexo"].setValue(datos.sexo);
      this.fgValidador.controls["correo"].setValue(datos.correo);
    })
  }

  EditarEmpleado(){
    let identificacion = this.fgValidador.controls["identificacion"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let fechaInicio = this.fgValidador.controls["fechaInicio"].value;
    let cargo = this.fgValidador.controls["cargo"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let nivel = this.fgValidador.controls["nivel"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let sexo = this.fgValidador.controls["sexo"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let p = new ModeloEmpleado();
    p.identificacion = identificacion;
    p.nombre = nombre;
    p.apellido = apellido;
    p.fechaInicio = fechaInicio;
    p.cargo = cargo;
    p.departamento = departamento;
    p.nivel = nivel;
    p.foto = foto;
    p.direccion = direccion;
    p.ciudad = ciudad;
    p.sexo = sexo;
    p.correo = correo;
    p.comision = 0;
    p.rolId = "619511c4fda2f8337ccf426d";
    p.mascotaId = "NINGUNO";
    p.clave = "123456";
    p.id = this.id;

    this.servicioEmpleado.ActualizarEmpleado(p).subscribe((datos: ModeloEmpleado) => {
      alert("Empleado actualizado correctamente");
      this.router.navigate(["/administracion/listar-empleados"]);
    },(error: any) => {
      alert("Error editando el empleado");
    })
  }

}

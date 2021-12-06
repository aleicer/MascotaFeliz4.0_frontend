import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
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
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarEmpleado(){
    let m = new ModeloEmpleado();
    /*CREACION MODELO MASCOTA*/
    m.identificacion= this.fgValidador.controls["identificacion"].value;
    m.nombre = this.fgValidador.controls["nombre"].value;
    m.apellido = this.fgValidador.controls["apellido"].value;
    m.fechaInicio = this.fgValidador.controls["fechaInicio"].value;
    m.cargo = this.fgValidador.controls["cargo"].value;
    m.departamento = this.fgValidador.controls["departamento"].value;
    m.comision = 0;
    m.nivel = this.fgValidador.controls["nivel"].value;
    m.foto = this.fgValidador.controls["foto"].value;
    m.direccion = this.fgValidador.controls["direccion"].value;
    m.ciudad = this.fgValidador.controls["ciudad"].value;
    m.sexo = this.fgValidador.controls["sexo"].value;
    m.clave = "";
    m.correo = this.fgValidador.controls["correo"].value;
    m.mascotaId = "NINGUNO";
    m.rolId = "619511c4fda2f8337ccf426d";
    
    this.servicioEmpleado.CrearEmpleado(m).subscribe((datos: ModeloEmpleado)=>{
      alert("empleado Creado con ID "+ datos.id);
      this.router.navigate(["/administracion/listar-empleados"]);
    },(Error : any)=>{
      alert("Error al crear el empleado");
    })
  }
}

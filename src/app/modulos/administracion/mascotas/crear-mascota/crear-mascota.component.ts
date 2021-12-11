import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelFormularioInscripcion } from 'src/app/modelos/formulario-inscripcion';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'raza': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'sexo': ['', [Validators.required]],
    'fechaNac': ['', [Validators.required]],
    'seniales': ['', [Validators.required]],
    'alimento': ['', [Validators.required]],
    'peso': ['', [Validators.required]],
    'enfermedades': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'observacionesCliente': ['']
  })

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  GuardarMascota(){
    let m = new ModeloMascota();
    let f = new ModelFormularioInscripcion();
    /*CREACION MODELO MASCOTA*/
    m.nombre= this.fgValidador.controls["nombre"].value;
    m.estadoAfiliacion = "Pendiente";
    m.motivoInactivo = "Ninguno";
    m.especie = this.fgValidador.controls["especie"].value;
    m.raza = this.fgValidador.controls["raza"].value;
    m.color = this.fgValidador.controls["color"].value;
    m.sexo = this.fgValidador.controls["sexo"].value;
    m.fechaNac = this.fgValidador.controls["fechaNac"].value;
    m.seniales = this.fgValidador.controls["seniales"].value;
    m.alimento = this.fgValidador.controls["alimento"].value;
    m.peso = this.fgValidador.controls["peso"].value;
    m.enfermedades = this.fgValidador.controls["enfermedades"].value;
    m.obsEnfPre = "Ninguna"
    m.foto = this.fgValidador.controls["foto"].value;
    m.planId = this.fgValidador.controls["planId"].value;//id de cada plan incrustado en el html 
    m.clienteId= this.servicioSeguridad.ObtenerId()//sacamos id desde el servicio seguridad guardado en el localstorage, funcion que recupera solo el ID
    
    this.servicioMascota.CrearMascota(m).subscribe((datos: ModeloMascota) => {//llamado a funcion con peticion POST crea mascota, nos retorna modelo creado
      if (datos){
        /*CREACION MODELO FORMULARIO INSCRIPCION*/
        f.mascotaId = datos.id;
        f.observacionesCliente = this.fgValidador.controls["observacionesCliente"].value;
        f.observacionesEmpleado = "Ninguna";
        f.clienteId= this.servicioSeguridad.ObtenerId();
        this.servicioMascota.CrearFormularioInscripcion(f).subscribe((datos : ModelFormularioInscripcion)=>{//funcion con peticion post formulario Inscripcion 
          alert("Registro de Inscripcion guardado, te responderemos lo antes posible")
          this.router.navigate(["/administracion/listar-mascotas"]);//redireccionamos a la lista si todo funciono.
        },(Error: any)=>{
          alert("Error al ingresar Formulario :/")
        })
      }
    },(Error: any) => {
      alert("Error almacenando la mascota");
    })
  }

}

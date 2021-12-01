import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

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
    'peso': ['', [Validators.required]],
    'enfermedades': ['', [Validators.required]],
    'foto': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let raza = this.fgValidador.controls["raza"].value;
    let color = this.fgValidador.controls["color"].value;
    let sexo = this.fgValidador.controls["sexo"].value;
    let fechaNac = this.fgValidador.controls["fechaNac"].value;
    let peso = parseInt(this.fgValidador.controls["peso"].value);
    let enfermedades = this.fgValidador.controls["enfermedades"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let p = new ModeloMascota();
    p.nombre = nombre;
    p.especie = especie;
    p.raza = raza;
    p.color = color;
    p.sexo = sexo;
    p.fechaNac = fechaNac;
    p.peso = peso;
    p.enfermedades = enfermedades;
    p.foto = foto;

    this.servicioMascota.CrearMascota(p).subscribe((datos: ModeloMascota) => {
      alert("Mascota almacenada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    },(error: any) => {
      alert("Error almacenando la mascota");
    })
  }

}

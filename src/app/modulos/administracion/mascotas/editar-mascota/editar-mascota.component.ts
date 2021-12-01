import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota(){
    this.servicioMascota.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["especie"].setValue(datos.especie);
      this.fgValidador.controls["raza"].setValue(datos.raza);
      this.fgValidador.controls["color"].setValue(datos.color);
      this.fgValidador.controls["sexo"].setValue(datos.sexo);
      this.fgValidador.controls["fechaNac"].setValue(datos.fechaNac);
      this.fgValidador.controls["peso"].setValue(datos.peso);
      this.fgValidador.controls["enfermedades"].setValue(datos.enfermedades);
      this.fgValidador.controls["foto"].setValue(datos.foto);
    })
  }

  EditarMascota(){
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
    p.id = this.id;

    this.servicioMascota.ActualizarMascota(p).subscribe((datos: ModeloMascota) => {
      alert("Mascota actualizada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    },(error: any) => {
      alert("Error editando la mascota");
    })
  }

}

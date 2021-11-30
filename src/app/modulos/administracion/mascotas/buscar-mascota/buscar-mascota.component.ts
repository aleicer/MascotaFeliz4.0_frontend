import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  pagina: number = 1;

  listadoRegistros: ModeloMascota[] = [];

  constructor(private mascotaServicio: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerRegistros().subscribe((datos: ModeloMascota[]) => {
      this.listadoRegistros = datos;
    })
  }

  VerificarEliminacion(id?: string, nombre?: string){
    if(window.confirm("Realmente desea eliminar esta mascota")){
      let modelo = new ModeloMascota();
      modelo.id = id;
      modelo.nombre = nombre;
      this.mascotaServicio.EliminarMascota(modelo).subscribe((datos) => {
        alert("El registro de mascota ha sido eliminado correctamente.");
        this.listadoRegistros = this.listadoRegistros.filter(x => x.id != id);
      },(error) => {
        alert("Error eliminando la mascota ");
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ModelPlan } from 'src/app/modelos/plan.model';
import { PlanesService } from 'src/app/servicios/planes.service';
@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.css']
})
export class BuscarPlanComponent implements OnInit {
  pagina: number = 1;

  listadoPlanes: ModelPlan[] = [];

  constructor(private servicioPlan: PlanesService) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes
  }
  ObtenerListadoPlanes(){
    this.servicioPlan.ObtenerRegistro().subscribe((datos: ModelPlan[]) => {
      this.listadoPlanes = datos;
    })
  }

  VerificarEliminacion(id?: string, nombre?: string){
    if(window.confirm("Realmente desea eliminar este Plan?")){
      let modelo = new ModelPlan();
      modelo.id = id;
      modelo.nombre = nombre;
      this.servicioPlan.EliminarPlan(modelo).subscribe((datos) => {
        alert("El registro de plan ha sido eliminado correctamente.");
        this.listadoPlanes = this.listadoPlanes.filter(x => x.id != id);
      },(error) => {
        alert("Error eliminando el plan");
      });
    }
  }

}


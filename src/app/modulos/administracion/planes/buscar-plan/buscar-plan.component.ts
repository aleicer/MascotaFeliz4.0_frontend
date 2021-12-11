import { Component, OnInit } from '@angular/core';
import { ModelPlan } from 'src/app/modelos/plan.model';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.css']
})
export class BuscarPlanComponent implements OnInit {

  pagina: number = 1;

  listadoRegistros: ModelPlan[] = [];

  constructor(private planServicio: PlanService) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes();
  }

  ObtenerListadoPlanes(){
    this.planServicio.ObtenerRegistros().subscribe((datos: ModelPlan[]) => {
      this.listadoRegistros = datos;
    })
  }

  VerificarEliminacion(id?: string, nombre?: string){
    if(window.confirm("Realmente desea eliminar este plan")){
      let modelo = new ModelPlan();
      modelo.id = id;
      modelo.nombre = nombre;
      this.planServicio.EliminarPlan(modelo).subscribe((datos) => {
        alert("El registro de plan ha sido eliminado correctamente.");
        this.listadoRegistros = this.listadoRegistros.filter(x => x.id != id);
      },(error) => {
        alert("Error eliminando el plan ");
      });
    }
  }

}

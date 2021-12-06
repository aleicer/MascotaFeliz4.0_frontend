import { Component, OnInit } from '@angular/core';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {

  pagina: number = 1;

  listadoRegistros: ModeloEmpleado[] = [];

  constructor(private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpleados();
  }

  ObtenerListadoEmpleados(){
    this.empleadoServicio.ObtenerRegistros().subscribe((datos: ModeloEmpleado[]) => {
      this.listadoRegistros = datos;
    })
  }

  VerificarEliminacion(id?: string, nombre?: string){
    if(window.confirm("Realmente desea eliminar este empleado")){
      let modelo = new ModeloEmpleado();
      modelo.id = id;
      modelo.nombre = nombre;
      this.empleadoServicio.EliminarEmpleado(modelo).subscribe((datos) => {
        alert("El registro de empleado ha sido eliminado correctamente.");
        this.listadoRegistros = this.listadoRegistros.filter(x => x.id != id);
      },(error) => {
        alert("Error eliminando el empleado ");
      });
    }
  }

}

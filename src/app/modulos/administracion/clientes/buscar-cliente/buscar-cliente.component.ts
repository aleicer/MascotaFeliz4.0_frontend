import { Component, OnInit } from '@angular/core';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  listadoRegistros: ModeloCliente[]=[];
  constructor(private clienteServicio : ClienteService) { }

  ngOnInit(): void {
    this.clienteServicio.ObtenerRegistro().subscribe((datos: ModeloCliente[])=>{
      this.listadoRegistros = datos;
    },(error) =>{
      alert("Error listando datos")
    })
  }

  VerificarEliminacion(cliente: ModeloCliente){
    if (window.confirm("Confirma que desea Eliminar este registro de " + cliente.nombre+ " "+ cliente.apellido+ " ?")){
      this.clienteServicio.EliminarCliente(cliente).subscribe((datos) =>{
        alert("El registro de "+ cliente.nombre+ " "+ cliente.apellido+ "se ha eliminado");
        this.listadoRegistros = this.listadoRegistros.filter(x=> x.id != cliente.id);
      },(Error)=>{
        alert("Error eliminando el registro")
      })
    }
  }

}
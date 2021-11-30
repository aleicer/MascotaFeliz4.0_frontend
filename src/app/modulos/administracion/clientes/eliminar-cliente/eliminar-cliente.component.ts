import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  id:string = "";

  constructor(private servicioCliente: ClienteService,
             private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"]
    let datos = this.BucarCliente();
  }

  
  BucarCliente(){
    this.servicioCliente.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloCliente)=>{
    })
  }

}

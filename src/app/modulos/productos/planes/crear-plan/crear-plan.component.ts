import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPlan } from 'src/app/modelos/plan.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'sexo':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'ciudad':['',[Validators.required]],
    'clave':['',[Validators.required]],
    'correo':['',[Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
    let c = new ModelPlan();
    let telefono = this.fgValidador.controls["telefono"].value;
    let documento = this.fgValidador.controls["documento"].value;
    c.nombre= this.fgValidador.controls["nombre"].value;
    c.descripcion = this.fgValidador.controls["descripcion"].value;
    c.precio = this.fgValidador.controls["precio"].value;
    
    this.servicioCliente.CrearCliente(c).subscribe((datos: ModelPlan)=>{
      alert("Usuario Creado con ID "+ datos.id);
      this.router.navigate(["/administracion/buscar-clientes"]);
    }),(Error : any)=>{
      alert("Error al crear Usuario");
    }

  }
}

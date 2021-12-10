import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPlan } from 'src/app/modelos/plan.model';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'precio':['',[Validators.required]],
    });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPlan(){
    let c = new ModelPlan();
    c.nombre= this.fgValidador.controls["nombre"].value;
    c.descripcion = this.fgValidador.controls["descripcion"].value;
    c.precio = this.fgValidador.controls["precio"].value;
    
    this.servicioPlan.CrearPlan(c).subscribe((datos: ModelPlan)=>{
      alert("Plan Creado con ID "+ datos.id);
      this.router.navigate(["/productos/buscar-plan"]);
    }),(Error : any)=>{
      alert("Error al crear plan");
    }

  }
}

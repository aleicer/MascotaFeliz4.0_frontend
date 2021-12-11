import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPlan } from 'src/app/modelos/plan.model';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  GuardarPlan(){
    let m = new ModelPlan();
    /*CREACION MODELO MASCOTA*/
    m.nombre= this.fgValidador.controls["nombre"].value;
    m.descripcion = this.fgValidador.controls["descripcion"].value;
    m.precio = this.fgValidador.controls["precio"].value;
   
    
    this.servicioPlan.CrearPlan(m).subscribe((datos: ModelPlan) => {//llamado a funcion con peticion POST crea mascota, nos retorna modelo creado
      if (datos){
      alert("plan Creado con ID "+ datos.id);
      this.router.navigate(["/administracion/listar-planes"]);
      }
    },(Error: any) => {
      alert("Error almacenando el plan");
    })
  }

}

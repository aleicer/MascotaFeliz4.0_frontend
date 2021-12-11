import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPlan } from 'src/app/modelos/plan.model';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }

  BuscarPlan(){
    this.servicioPlan.ObtenerRegistrosPorId(this.id).subscribe((datos: ModelPlan) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    })
  }

  EditarPlan(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = this.fgValidador.controls["precio"].value;
    let p = new ModelPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;

    this.servicioPlan.ActualizarPlan(p).subscribe((datos: ModelPlan) => {
      alert("Plan actualizado correctamente");
      this.router.navigate(["/administracion/listar-planes"]);
    },(error: any) => {
      alert("Error editando el plan");
    })
  }

}

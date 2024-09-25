import { Component, OnInit, Output } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent implements OnInit {
   ingresos: Ingreso [] = [];

  constructor (private ingresosServicio: IngresoServicio){
  }

  ngOnInit(): void {
    this.ingresos = this.ingresosServicio.ingreso;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresosServicio.eliminar(ingreso);
  }
}

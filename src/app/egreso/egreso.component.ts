import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './engreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];

  @Input() ingresoTotal :number

  constructor(private egresoServicio: EgresoServicio){
  }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminarEgreso(egreso)
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal
  }
}


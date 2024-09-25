import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/engreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private ingresoServicio: IngresoServicio, 
    private egresoServicio:EgresoServicio){
      this.ingresos = ingresoServicio.ingreso;
      this.egresos = egresoServicio.egresos;
    }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    }
  );
  return ingresoTotal;
  }

  getEgresoTotal(){
    let engresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      engresoTotal += egreso.valor;
    }
  );
  return engresoTotal;
  }

  getPorcenjateTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal (){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}

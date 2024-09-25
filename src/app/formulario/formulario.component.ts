import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/engreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  tipo:string= "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio, 
              private egresoServicio: EgresoServicio){}

  ngOnInit(): void {
    
  }

  tipoOperacion(evento:any){
    this.tipo = evento.target.value;
  }

  agregarValor() :void{
    if (this.tipo === "ingresoOperacion") {
      this.ingresoServicio.ingreso.push(new Ingreso(this.descripcionInput, this.valorInput))
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }
  }
}

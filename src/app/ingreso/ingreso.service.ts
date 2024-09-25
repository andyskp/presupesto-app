import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    ingreso:Ingreso[] = [
        new Ingreso ("Salario", 40000),
        new Ingreso ("Venta Coche", 5000)
    ];

    eliminar(ingreso:Ingreso) {
        const indice: number = this.ingreso.indexOf(ingreso);
        this.ingreso.splice(indice, 1);
    }
}
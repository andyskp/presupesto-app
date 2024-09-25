import { Egreso } from "./engreso.model";

export class EgresoServicio {
    egresos: Egreso[] = [
        new Egreso ("Renta de Depto",900),
        new Egreso ("Ropa", 200)
    ]

    eliminarEgreso(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}
export class ModeloCliente{
    id?: string;
    identificacion?: string;
    nombre?: string;
    apellido?: string;
    direccion?: string;
    ciudad?: string;
    sexo?: string;
    telefono?:string;
    correo?: string;
    clave?: string;
    rolId?: string;
    nombreCompleto(){
        return this.nombre+ " " + this.apellido
    }
}
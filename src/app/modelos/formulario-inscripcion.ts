import { ModeloCliente } from "./cliente.modelo";
import { ModeloMascota } from "./mascota.modelo";

export class ModelFormularioInscripcion{
    id?: string;
    observacionesEmpleado?: string;
    observacionesCliente?: string;
    mascotaId?: string;
    clienteId?: string;
    empleadoId?: string;
    mascota?: ModeloMascota;
    cliente?: ModeloCliente;
    
}
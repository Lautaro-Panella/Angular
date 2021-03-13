import { ListaUsuariosI } from "./listaUsuarios.interface";

export interface ListaDireccionesI {
    id: number;
    tipo: string;
    calle: string;
    numero: number;
    localidad: string;
    ciudad: string;
    pais: string;
    usuario: ListaUsuariosI;
}
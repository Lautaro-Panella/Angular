import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';
import { ListaDireccionesI } from 'src/app/modelos/listaDirecciones.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlUsuario: string = "http://localhost:8080/usuario";
  urlDireccion: string = "http://localhost:8080/direccion";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<ListaUsuariosI[]> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<ListaUsuariosI[]>(this.urlUsuario, { 
      headers: header
    });
  }

  getUsuarioPorId(id): Observable<ListaUsuariosI> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.urlUsuario +"/"+ id;
    return this.http.get<ListaUsuariosI>(cadena, { 
      headers: header
    });
  }

  saveUsuario(usuario: ListaUsuariosI): Observable<ListaUsuariosI> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ListaUsuariosI>(this.urlUsuario, usuario, { 
      headers: header
    });
  }

  updateUsuario(usuario: ListaUsuariosI): Observable<ListaUsuariosI>{
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<ListaUsuariosI>(this.urlUsuario, usuario, { 
      headers: header
    });
  }

  deleteUsuarioPorId(id: number) {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.urlUsuario +"/"+ id;
    return this.http.delete(cadena, { 
      headers: header, responseType: 'text'
    });
  }

  getDirecciones(): Observable<ListaDireccionesI[]> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<ListaDireccionesI[]>(this.urlDireccion, { 
      headers: header
    });
  }

  getDireccionPorId(id): Observable<ListaDireccionesI> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.urlDireccion +"/"+ id;
    return this.http.get<ListaDireccionesI>(cadena, { 
      headers: header
    });
  }

  getDireccionesPorId(id): Observable<ListaDireccionesI[]> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.urlDireccion +"/consulta?usuario="+ id;
    return this.http.get<ListaDireccionesI[]>(cadena, { 
      headers: header
    });
  }

  saveDireccion(direccion: ListaDireccionesI): Observable<ListaDireccionesI> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ListaDireccionesI>(this.urlDireccion, direccion, { 
      headers: header
    });
  }

  updateDireccion(direccion: ListaDireccionesI): Observable<ListaDireccionesI>{
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<ListaDireccionesI>(this.urlDireccion, direccion, { 
      headers: header
    });
  }

  deleteDireccionPorId(id: number) {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.urlDireccion +"/"+ id;
    return this.http.delete(cadena, { 
      headers: header, responseType: 'text'
    });
  }

}

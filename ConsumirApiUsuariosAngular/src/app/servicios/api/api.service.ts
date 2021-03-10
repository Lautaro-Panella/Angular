import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:8080/usuario/";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<ListaUsuariosI[]> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<ListaUsuariosI[]>(this.url, { 
      headers: header
    });
  }

  getUsuarioPorId(id): Observable<ListaUsuariosI> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.url + id;
    return this.http.get<ListaUsuariosI>(cadena, { 
      headers: header
    });
  }

  saveUsuario(usuario: ListaUsuariosI): Observable<ListaUsuariosI> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ListaUsuariosI>(this.url, usuario, { 
      headers: header
    });
  }

  updateUsuario(usuario: ListaUsuariosI): Observable<ListaUsuariosI>{
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<ListaUsuariosI>(this.url, usuario, { 
      headers: header
    });
  }

  deleteUsuarioPorId(id: number) {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let cadena = this.url + id;
    return this.http.delete(cadena, { 
      headers: header, responseType: 'text'
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { ListaUsuariosI } from '../../modelos/listaUsuarios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios: ListaUsuariosI[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    });
  }

  updateUsuario(id) {
    this.router.navigate(['editarUsuario', id]);
  }

  saveUsuario() {
    this.router.navigate(['nuevoUsuario']);
  }

}

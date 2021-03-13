import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { ListaDireccionesI } from '..//..//modelos/listaDirecciones.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  direcciones: ListaDireccionesI[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getDirecciones();
  }

  getDirecciones() {
    this.api.getDirecciones().subscribe(data =>{
      this.direcciones = data;
    });
  }

  saveDireccion() {
    this.router.navigate(['nuevaDireccion']);
  }

  updateDireccion(id) {
    this.router.navigate(['editarDireccion', id]);
  }

  irAUsuarios() {
    this.router.navigate(['dashboard']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';
import { ListaDireccionesI } from '../../modelos/listaDirecciones.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-direcciones',
  templateUrl: './ver-direcciones.component.html',
  styleUrls: ['./ver-direcciones.component.css']
})
export class VerDireccionesComponent implements OnInit {

  direcciones: ListaDireccionesI[];

  usuario: ListaUsuariosI;

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getUsuarioPorId(id).subscribe(data =>{
      this.usuario = data;
    });
    this.api.getDireccionesPorId(id).subscribe(data =>{
      this.direcciones = data;
    });
  }

  updateDireccion(id) {
    this.router.navigate(['editarDireccion', id]);
  }

  irAUsuarios() {
    this.router.navigate(['dashboard']);
  }

}

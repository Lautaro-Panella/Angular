import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ListaUsuariosI } from '../../modelos/listaUsuarios.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  guardarFormUsuario = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private api: ApiService, private alerta: AlertasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  postForm(form: ListaUsuariosI) {
    this.api.saveUsuario(form).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo guardar el usuario!", "Error")
      } else {
        this.alerta.mostrarSuccess("Usuario guardado!", "Hecho")
      }
      this.router.navigate(['dashboard']);
    });
  }

  volver() {
    this.router.navigate(['dashboard']);
  }

}

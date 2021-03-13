import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ListaUsuariosI } from '../../modelos/listaUsuarios.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: ListaUsuariosI;
  
  editarFormUsuario = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private api: ApiService, private alerta:AlertasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getUsuarioPorId(id).subscribe(data =>{
      this.usuario = data;
      this.editarFormUsuario.setValue({
        'id': this.usuario.id,
        'nombre': this.usuario.nombre,
        'apellido': this.usuario.apellido,
        'email': this.usuario.email
      });
    });
  }

  putForm(form: ListaUsuariosI) {
    this.api.updateUsuario(form).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo actualizar el usuario!", "Error")
      } else {
        this.alerta.mostrarSuccess("Usuario actualizado!", "Hecho")
      }
      this.router.navigate(['dashboard']);
    });
  }

  deleteUsuario() {
    this.api.deleteUsuarioPorId(this.usuario.id).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo eliminar el usuario!", "Error")
      } else {
        this.alerta.mostrarSuccess("Usuario eliminado!", "Hecho")
      }
    this.router.navigate(['dashboard']);
    });
  }

  volver() {
    this.router.navigate(['dashboard']);
  }

}

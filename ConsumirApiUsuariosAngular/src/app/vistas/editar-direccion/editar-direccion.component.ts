import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';
import { ListaDireccionesI } from '../../modelos/listaDirecciones.interface';
import { FormDireccionesI } from 'src/app/modelos/formDirecciones.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-direccion',
  templateUrl: './editar-direccion.component.html',
  styleUrls: ['./editar-direccion.component.css']
})
export class EditarDireccionComponent implements OnInit {

  direccion: ListaDireccionesI;

  usuarios: ListaUsuariosI[];

  editarFormDireccion = new FormGroup({
    calle: new FormControl(''),
    numero: new FormControl(''),
    localidad: new FormControl(''),
    ciudad: new FormControl(''),
    pais: new FormControl(''),
    tipo: new FormControl(''),
    idUsuario: new FormControl('')
  });
  
  constructor(private api: ApiService, private alerta:AlertasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDireccionPorId(id).subscribe(data =>{
      this.direccion = data;
      this.editarFormDireccion.setValue({
        'calle': this.direccion.calle,
        'numero': this.direccion.numero,
        'localidad': this.direccion.localidad,
        'ciudad': this.direccion.ciudad,
        'pais': this.direccion.pais,
        'tipo': this.direccion.tipo,
        'idUsuario': this.direccion.usuario.id
      });
    });
    this.getUsuarios();
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    });
  }

  putForm(form: FormDireccionesI) {
    this.api.getUsuarioPorId(form.idUsuario).subscribe(data =>{
      let direccion = {"id": this.direccion.id, "calle": form.calle, "numero": form.numero, "localidad": form.localidad, 
      "ciudad": form.ciudad, "pais": form.pais, "tipo": form.tipo, "usuario": data};
      this.api.updateDireccion(direccion).subscribe(data =>{
        if(data == null) {
          this.alerta.mostrarError("No se pudo actualizar la dirección!", "Error")
        } else {
          this.alerta.mostrarSuccess("Dirección actualizada!", "Hecho")
        }
        this.router.navigate(['direcciones']);
      });
    });
  }

  deleteDireccion() {
    this.api.deleteDireccionPorId(this.direccion.id).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo eliminar la dirección!", "Error")
      } else {
        this.alerta.mostrarSuccess("Dirección eliminada!", "Hecho")
      }
    this.router.navigate(['direcciones']);
    });
  }

  volver() {
    this.router.navigate(['direcciones']);
  }

}

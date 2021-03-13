import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ListaUsuariosI } from '../../modelos/listaUsuarios.interface';
import { FormDireccionesI } from 'src/app/modelos/formDirecciones.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.component.html',
  styleUrls: ['./nueva-direccion.component.css']
})
export class NuevaDireccionComponent implements OnInit {
  
  usuarios: ListaUsuariosI[];
  
  guardarFormDireccion = new FormGroup({
    calle: new FormControl(''),
    numero: new FormControl(''),
    localidad: new FormControl(''),
    ciudad: new FormControl(''),
    pais: new FormControl(''),
    tipo: new FormControl(''),
    idUsuario: new FormControl('')
  });

  constructor(private api: ApiService, private alerta: AlertasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    });
  }

  postForm(form: FormDireccionesI) {
    this.api.getUsuarioPorId(form.idUsuario).subscribe(data =>{
      let direccion = {"id": 0, "calle": form.calle, "numero": form.numero, "localidad": form.localidad, 
      "ciudad": form.ciudad, "pais": form.pais, "tipo": form.tipo, "usuario": data};
      this.api.saveDireccion(direccion).subscribe(data =>{
        if(data == null) {
          this.alerta.mostrarError("No se pudo guardar la dirección!", "Error")
        } else {
          this.alerta.mostrarSuccess("Dirección guardada!", "Hecho")
        }
        this.router.navigate(['direcciones']);
      });
    });
  }

  volver() {
    this.router.navigate(['direcciones']);
  }

}

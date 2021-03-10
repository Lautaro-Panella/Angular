import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toast: ToastrService) { }

  mostrarSuccess(texto, titulo) {
    this.toast.success(texto, titulo);
  }

  mostrarError(texto, titulo) {
    this.toast.error(texto, titulo);
  }

}

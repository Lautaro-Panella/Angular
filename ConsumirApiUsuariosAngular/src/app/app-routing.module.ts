import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './vistas/editar-usuario/editar-usuario.component';
import { DireccionesComponent } from './vistas/direcciones/direcciones.component';
import { NuevaDireccionComponent } from './vistas/nueva-direccion/nueva-direccion.component';
import { EditarDireccionComponent } from './vistas/editar-direccion/editar-direccion.component';
import { VerDireccionesComponent } from './vistas/ver-direcciones/ver-direcciones.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent },
  { path: 'editarUsuario/:id', component: EditarUsuarioComponent },
  { path: 'direcciones', component: DireccionesComponent },
  { path: 'nuevaDireccion', component: NuevaDireccionComponent },
  { path: 'editarDireccion/:id', component: EditarDireccionComponent },
  { path: 'verDirecciones/:id', component: VerDireccionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, NuevoUsuarioComponent, EditarUsuarioComponent, DireccionesComponent, NuevaDireccionComponent, EditarDireccionComponent, VerDireccionesComponent]

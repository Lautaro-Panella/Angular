import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
// import { DashboardComponent } from './vistas/dashboard/dashboard.component';
// import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
// import { EditarUsuarioComponent } from './vistas/editar-usuario/editar-usuario.component';
// import { DireccionesComponent } from './vistas/direcciones/direcciones.component';
// import { NuevaDireccionComponent } from './vistas/nueva-direccion/nueva-direccion.component';
// import { EditarDireccionComponent } from './vistas/editar-direccion/editar-direccion.component';
// import { VerDireccionesComponent } from './vistas/ver-direcciones/ver-direcciones.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // DashboardComponent,
    // NuevoUsuarioComponent,
    // EditarUsuarioComponent,
    // DireccionesComponent,
    // NuevaDireccionComponent,
    // EditarDireccionComponent,
    // VerDireccionesComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

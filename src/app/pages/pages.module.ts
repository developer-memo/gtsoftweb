import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { FormContactComponent } from '../components/form-contact/form-contact.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { ServicesWorkComponent } from '../components/services-work/services-work.component';



@NgModule({
  declarations: [
    ContactoComponent,
    HomeComponent,
    ProyectosComponent,
    ServiciosComponent,
    SobreMiComponent,
    FormContactComponent,
    ServicesWorkComponent,
    DetalleProyectoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactoComponent,
    HomeComponent,
    ProyectosComponent,
    ServiciosComponent,
    SobreMiComponent,
    FormContactComponent,
    ServicesWorkComponent,
    DetalleProyectoComponent
  ]
})
export class PagesModule { }

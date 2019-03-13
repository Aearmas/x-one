import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

///importando operaciones 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from "./Material";

import { HttpClientModule } from '@angular/common/http';

import { UsuariosService } from './usuarios.service';

//////rutas de ventanas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PasosComponent } from './pasos/pasos.component';
import {PasosComponentDoc} from './pasos/pasos.component';

import { MatStepperModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ContactoComponent,
    InicioComponent,
    ComoFuncionaComponent,
    NosotrosComponent,
    BlogComponent,
    AyudaComponent,
    LoginComponent,
    FooterComponent,
    PasosComponent,
    PasosComponentDoc,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MatStepperModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),

  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent],
  entryComponents:[PasosComponentDoc],
})
export class AppModule { }

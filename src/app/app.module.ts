import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from "./Material";

 



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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AlertModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

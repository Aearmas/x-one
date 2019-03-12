import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importartando las rutas de las ventanas
import {ContactoComponent} from './contacto/contacto.component';
import {InicioComponent} from  './inicio/inicio.component';
import {BlogComponent} from './blog/blog.component';
import {AyudaComponent} from './ayuda/ayuda.component';
import {ComoFuncionaComponent} from './como-funciona/como-funciona.component';
import {LoginComponent} from './login/login.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {PasosComponent} from './pasos/pasos.component';



const routes: Routes = [
  {path: 'contacto', component:ContactoComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'como-funciona', component:ComoFuncionaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'inicio/solicitud/pasos', component:PasosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

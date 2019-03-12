import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';


//// add base de datos 
import { UsuariosService } from '../usuarios.service';



@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.css']
})

export class PasosComponent implements OnInit {


  
  //gestion de usuarios 
   usuarios = null;

  usuario = {
    idUsuario: null,
    nombre: null, 
    apellido_paterno: null, 
    apellido_materno: null, 
    celular: null, 
    dni: null, 
    email: null, 
    direccion: null, 
    clave: null  
  }

  constructor(private usuariosServicio: UsuariosService, public dialog: MatDialog ) { }
  openDialog() {
      const dialogRef = this.dialog.open(PasosComponentDoc);

     dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
     });
  }

  ngOnInit() {
    this.obtenerUsuarios();
    ////gestion de  prestamos 
    
  }

  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }

  altaUsuario() {
    this.usuariosServicio.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
         /* this.usuario.nombre='';
          this.usuario.telefono='';
          this.usuario.email='';*/
        }
      }
    );
  }

  bajaUsuario(idUsuario) {
    this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario() {
    this.usuariosServicio.editarUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  seleccionarUsuario(idUsuario) {
    this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  hayRegistros() {
    return true;
  }
  
}

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.doc.html',
})
export class PasosComponentDoc  {}
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

//////gestion de pasos de prestamo
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneValidator= /^[0-9]{1,7}$/;
//// add base de datos 
import { UsuariosService } from '../usuarios.service';



@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.css']
})

export class PasosComponent implements OnInit {
  hide = true;


  ///validaciones de registro
   ///validar celular
   celularFormControl = new FormControl('', [
    Validators.required]);
  //validar correo
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
    /////validando ndi
    dniFormControl =new FormControl('', [
      Validators.required]);
  ///validar password
  passwordGroup = new FormGroup({
    password: new FormControl('', []),
    confirm_password: new FormControl('', [])
  });
  ///validar direccion
  direccionFormControl = new FormControl('', [
    Validators.required]);

    ///////////validando nombres
    nombreFormControl= new FormControl('', [
      Validators.required]);

    ap_paternoFormControl= new FormControl('', [
    Validators.required]);

    ap_maternoFormControl= new FormControl('', [
    Validators.required]);

  ////gestionando pasos 
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  
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

  constructor(private usuariosServicio: UsuariosService, public dialog: MatDialog,private _formBuilder: FormBuilder ) { }
  openDialog() {
      const dialogRef = this.dialog.open(PasosComponentDoc);

     dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
     });
  }

  ngOnInit() {
    this.obtenerUsuarios();
    ////gestion de  prestamos 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
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
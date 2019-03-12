import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent   {
      
  incrementar=500;
  como_pagas=2;
  monto_pagar=this.incrementar/this.como_pagas * 1.19;;

  Incrementar_monto(){
    if (this.incrementar<= 900){
      this.incrementar = this.incrementar+100
    }else {
      alert ('Más de S/1000 a partir de tu 2do préstamo');
    }
   
    if (this.incrementar >= 500 && this.incrementar <= 700){
        if(this.como_pagas =  2 ){
        this.monto_pagar= this.incrementar / this.como_pagas * 1.19;
      }else {
        alert('El monto seleccionado solo se presta en 3 meses');
      }
      
    } else {
      alert ('El monto ingresado solo se presta en 3 meses');
    }
}
Disminuir_monto(){
 if (this.incrementar >= 600){
  this.incrementar = this.incrementar-100 
  
 }else {
   alert ('El monto minimo de prestamo es de S/.500.000');
 }

 if (this.incrementar >= 500 && this.incrementar <= 700){
  if(this.como_pagas =  2 ){
  this.monto_pagar= this.incrementar / this.como_pagas * 1.19;
}else {
  alert('El monto seleccionado solo se presta en 3 meses');
}

} else {
alert ('El monto ingresado solo se presta en 3 meses');
}

}

/////gestionado fecha de pagos 

Disminuir_cuotas(){

  if (this.como_pagas >= 3 ){
    this.como_pagas = this.como_pagas-1
    
  }
  else
  {
    alert('El prestamo es minimo 2 meses ');
  }

  if  (this.incrementar >= 700 && this.incrementar <=1000)
  {
    if (this.como_pagas = 3 )
    {
      this.monto_pagar= this.incrementar/this.como_pagas *1.24;
    }
    else
    {
      alert('El monto ingresado se presta en 2 meses');
    }
  }
  else
  {
  alert('El monto que ingreso permite prestamo en 2 meses');

  }
 }

 Incrementar_cuotas(){

  if (this.como_pagas <= 2){
    this.como_pagas = this.como_pagas+1
    
  }else 
  {
    alert('Más de 3 cuota a partir de tu 2do préstamo ');
  }
  if  (this.incrementar >= 700 && this.incrementar <=1000)
  {
    if (this.como_pagas = 3 )
    {
      this.monto_pagar= this.incrementar/this.como_pagas *1.24;
    }
    else
    {
      alert('El monto ingresado se presta en 2 meses');
    }
  }
  else
  {
  alert('El monto que ingreso permite prestamo en 2 meses');

  }
  
 }
}

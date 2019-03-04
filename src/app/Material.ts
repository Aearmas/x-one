import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatStepperModule,MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule,MatTabsModule, MatStepperModule,MatFormFieldModule],
})
export class MyOwnCustomMaterialModule { }
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatStepperModule],
  exports: [MatButtonModule, MatCheckboxModule,MatTabsModule, MatStepperModule],
})
export class MyOwnCustomMaterialModule { }
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatTabsModule,
            MatStepperModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule
          ],
  exports: [MatButtonModule, 
            MatCheckboxModule,
            MatTabsModule, 
            MatStepperModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule
          ],
})
export class MyOwnCustomMaterialModule { }
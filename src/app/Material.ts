import {MatButtonModule, MatCheckboxModule,MatDatepickerModule, MatNativeDateModule} from '@angular/material';
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
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule
          ],
  exports: [MatButtonModule, 
            MatCheckboxModule,
            MatTabsModule, 
            MatStepperModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule
          ],
})
export class MyOwnCustomMaterialModule { }
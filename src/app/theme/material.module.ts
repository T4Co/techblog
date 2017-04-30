import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule
  ]
})
export class MaterialModule { }

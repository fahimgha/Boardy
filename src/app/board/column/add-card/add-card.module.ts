import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCardComponent } from './add-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddCardComponent
  ],
  exports: [
    AddCardComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class AddCardModule { }

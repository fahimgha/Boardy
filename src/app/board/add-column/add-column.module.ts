import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColumnComponent } from './add-column.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddColumnComponent],
  exports: [AddColumnComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddColumnModule {}

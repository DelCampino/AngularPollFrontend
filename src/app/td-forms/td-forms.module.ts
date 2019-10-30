import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdFormComponent } from './td-form/td-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';




@NgModule({
  declarations: [TdFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    TdFormComponent
  ]
})
export class TdFormsModule { }

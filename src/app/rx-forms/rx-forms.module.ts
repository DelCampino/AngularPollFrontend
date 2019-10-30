import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxFormComponent } from './rx-form/rx-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [RxFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RxFormsModule { }

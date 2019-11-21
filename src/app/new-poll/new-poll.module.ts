import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollComponent } from './new-poll/new-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [NewPollComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class NewPollModule { }

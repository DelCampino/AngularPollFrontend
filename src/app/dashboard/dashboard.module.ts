import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InfoComponent } from './info/info.component';
import { PollsComponent } from './polls/polls.component';

@NgModule({
  declarations: [
    FriendsComponent,
    DashboardComponent,
    InfoComponent,
    PollsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule 
  ]
})
export class DashboardModule { }

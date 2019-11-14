import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    FriendsComponent,
    DashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [FriendsComponent, DashboardComponent]
})
export class DashboardModule { }

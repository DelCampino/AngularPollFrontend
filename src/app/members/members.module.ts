import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { MemberService } from './member.service';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [MembersComponent, MemberDetailComponent],
    imports: 
    [
        CommonModule,
        MatButtonModule
    ],
    providers: [MemberService],
    exports: [MembersComponent]
})
export class MembersModule { }
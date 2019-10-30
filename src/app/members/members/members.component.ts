import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Observable<Member[]>;
  selectedMember: Member = null;
  chosenMember: Member = null;

  constructor(private _memberService: MemberService) {
    this.members = this._memberService.getMembers()
      .pipe(
        map(res => {
          return res.slice(0, 2);
        }),
        tap(t => console.log(t))
      );

  }

  showDetailMember(m: Member) {
    this.selectedMember = m;
  }

  onChooseMember(member: Member) {
    this.chosenMember = member;
  }

  ngOnInit() {
  }

}

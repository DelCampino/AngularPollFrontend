import { Component, OnInit } from '@angular/core';
import { faUserPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { FriendsService } from '../services/friends.service';
import { Friendrequest } from '../models/friendrequest.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Friendslist } from '../models/friendslist.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  requests: Observable<Object[]>;
  friends: Observable<Object[]>;
  model: Friendrequest = new Friendrequest(null, '');
  faUserPlus = faUserPlus;
  faCheck = faCheck;
  faTimes = faTimes;
  submitted = false;
  exists = false;
  alreadyFriends = false;
  validEmail = false;
  notSelf = false;
  success = false;
  requestCount = 0;

  constructor(private _friendsService: FriendsService) {
    this.requests = _friendsService.getFriendrequests()
      .pipe(
        tap(
          t => this.requestCount = t.length
        ),
        tap(
          t => console.log(t)
        )
      );

    this.friends = _friendsService.getFriends()
      .pipe(
        tap(
          a => console.log(a)
        )
      );
  }


  ngOnInit() {
    console.log(this.friends);
  }

  resetWarnings() {
    this.exists = false;
    this.validEmail = false;
    this.notSelf = false;
    this.success = false;
    this.alreadyFriends = false;
  }

  confirmRequest(id: number) {
    this._friendsService.confirmFriendrequest(id).subscribe(result => {
      this.requests = this._friendsService.getFriendrequests()
        .pipe(
          tap(
            t => this.requestCount = t.length
          ))
    })
  }

  denyRequest(id: number) {
    this._friendsService.denyFriendrequest(id).subscribe(result => {
      this.requests = this._friendsService.getFriendrequests()
        .pipe(
          tap(
            t => this.requestCount = t.length
          ))
    })
  }

  addFriend(form: NgForm) {
    this.resetWarnings();
    this.submitted = true;
    this._friendsService.sendFriendrequest(this.model).subscribe(
      result => {
        this.submitted = false;
        this.success = true;
      },
      error => {
        if (error.error.message == "Email not found") {
          this.validEmail = true;
        }
        if (error.error.message == "Cannot add yourself") {
          this.notSelf = true;
        }
        if (error.error.message == "Already exists") {
          this.exists = true;
        }
        if (error.error.message == "Already friends") {
          this.alreadyFriends = true;
        }

        this.submitted = false;
        console.log(error);
      }
    );
  }

}

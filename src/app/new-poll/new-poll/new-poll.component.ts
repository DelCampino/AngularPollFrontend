import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { faPlus, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FriendsService } from 'src/app/dashboard/services/friends.service';
import { Poll } from '../models/poll.model';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/dashboard/services/info.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.scss']
})
export class NewPollComponent implements OnInit {
  newPollForm: FormGroup;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt
  friendsData = null;
  userID = localStorage.getItem("userID");
  submitted = false;

  constructor(private _infoService: InfoService, private fb: FormBuilder, private _friendsService: FriendsService, private _pollService: PollService, private router: Router) { }

  ngOnInit() {
    this.newPollForm = this.fb.group({
      name: new FormControl([], Validators.required),
      participants: new FormArray([], minSelectedCheckboxes(1)),
      answers: this.fb.array([this.fb.group({ text: '' }), this.fb.group({ text: '' })]),
    })

    this.friendsData = this.getFriends();
  }

  getFriends() {
    this._friendsService.getFriends().subscribe(result => {
      this.friendsData = result;
      this.addCheckboxes();
    }
    )
  }

  minLengthArray(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min)
        return null;

      return { 'minLengthArray': { valid: false } };
    }
  }

  get participants() {
    return this.newPollForm.get('participants') as FormArray;
  }

  get answers() {
    return this.newPollForm.get('answers') as FormArray;
  }

  addAnswer() {
    this.answers.push(this.fb.group({ text: '' }));
  }

  deleteAnswer(index) {
    this.answers.removeAt(index);
  }

  private addCheckboxes() {
    this.friendsData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.newPollForm.controls.participants as FormArray).push(control);
    });
  }

  onSubmit() {
    this.submitted = true;
    var participants = [];
    this.newPollForm.value.participants.forEach(function (item, i) {
      if (item == true) {
        if (this.friendsData[i].user.userID != this.userID) {
          participants.push({
            "userID": this.friendsData[i].user.userID
          })
        }
        else {
          participants.push({
            "userID": this.friendsData[i].friend.userID
          })
        }
      }
    }, this
    );
    var newPoll = new Poll(
      this.newPollForm.value.name,
      parseInt(localStorage.getItem("userID")),
      participants,
      this.newPollForm.value.answers
    )
    console.log(newPoll)
    this._pollService.addPoll(newPoll).subscribe(
      result => {
      },
      error => {
        console.log(error)
      }
    );
    this.submitted = false;
    this.newPollForm.reset();
    this._infoService.refreshInfo.next(true);
    this.router.navigate(["/dashboard"]);
  }


}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
      .map(control => control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}

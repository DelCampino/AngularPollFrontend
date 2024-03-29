import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus, faArrowRight, faVoteYea, faCheck, faPoll } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PollsService } from '../services/polls.service';
import { votes } from 'src/app/new-poll/models/poll.model';
import { PollDetailComponent } from 'src/app/poll-detail/poll-detail.component';
import { BehaviorSubject } from 'rxjs';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  faPlus = faPlus;
  faArrowRight = faArrowRight;
  faVoteYea = faVoteYea;
  faCheck = faCheck;
  faPoll = faPoll;
  myPolls = [];
  createdPolls = [];
  selectedPoll: [];
  userID = localStorage.getItem("userID");

  constructor(private router: Router, private _pollsService: PollsService, private _infoService: InfoService) {
    this._infoService.refreshInfo.subscribe(e=> {
    this._pollsService.getUserPolls().subscribe(
      result => {
        this.myPolls = result;
      }, error => {
        console.log(error);
      })
    this._pollsService.getCreatedPolls().subscribe(
      result => {
        this.createdPolls = result;
        console.log(this.createdPolls);
      }, error => {
        console.log(error);
      })
    })
  }

  ngOnInit() {
  }

  newPoll() {
    this.router.navigate(['/newPoll']);
  }

  showDetailPoll(id: number) {
    this._pollsService.getPoll(id).subscribe(result => {
      this._pollsService.chosenPoll.next(result);
      this.router.navigate(['/pollDetail']);
    }, error => {
      console.log(error);
    })
  }

  getVoteCount(answers: any) {
    var votes = 0;
    answers.forEach(e =>
      votes += e.votes.length
    ), this
    return votes;
  }

  userVoted(answers: any[]) {
    var voted = false;
    answers.forEach(answer => {
      answer.votes.forEach(vote => {
        if (vote.userID == this.userID) {
          voted = true;
        }
      });
    });
    return voted;
  }

}

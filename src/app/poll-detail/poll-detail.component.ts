import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PollsService } from '../dashboard/services/polls.service';
import { VoteService } from './services/vote.service';
import { Vote } from './models/vote.model';
import { Poll } from '../poll-detail/models/poll.model';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {
  chosenPoll = [];
  submitted = false;
  alreadyVoted;
  totalVotes = 0;

  constructor(private router: Router, private _pollsService: PollsService, private _voteService: VoteService) {
    this.alreadyVoted = false;
    this.getCurrentPoll();
  }

  ngOnInit() {
  }

  getCurrentPoll() {
    this._pollsService.chosenPoll.subscribe(e => {
      this.chosenPoll = e;
      this.chosenPoll.answers.forEach(answer => {
        answer.votes.forEach(vote => {
          if (parseInt(localStorage.getItem("userID")) == vote.userID) {
            this.alreadyVoted = true;
          }
          this.totalVotes++;
        })
      });
      console.log(this.alreadyVoted);
    })
  }

  calcPercentage(votes: number) {
    return (votes/this.totalVotes*100);
  }

  vote(answerID: number) {
    this.submitted = true;
    this._voteService.addVote(new Vote(parseInt(localStorage.getItem("userID")), answerID)).subscribe(result => {
      this.getCurrentPoll();
    }, error => {
      console.log(error);
    })
  }

}

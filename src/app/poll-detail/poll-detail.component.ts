import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PollsService } from '../dashboard/services/polls.service';
import { VoteService } from './services/vote.service';
import { Vote } from './models/vote.model';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {
  chosenPoll: any;
  submitted = false;
  alreadyVoted;
  totalVotes = 0;
  participants = [];
  participantsChar = [];

  constructor(private router: Router, private _pollsService: PollsService, private _voteService: VoteService) {
    this.alreadyVoted = false;
    this._pollsService.chosenPoll.subscribe((e: any) => {
      this.chosenPoll = e;
      this.chosenPoll.answers.forEach(answer => {
        answer.votes.forEach(vote => {
          if (parseInt(localStorage.getItem("userID")) == vote.userID) {
            this.alreadyVoted = true;
          }
          this.totalVotes++;
        })
      })
      this.chosenPoll.participants.forEach((p) => {
        this.participants[p.user.userID] = p.user.username;
        this.participantsChar[p.user.userID] = (p.user.username.charAt(0) + p.user.username.charAt(1));
      })

    });
  }

  ngOnInit() {
  }
  refreshCurrentPoll() {
    this._pollsService.getPoll(this.chosenPoll.pollID).subscribe(e => {
      this._pollsService.chosenPoll.next(e);
    })
  }

  calcPercentage(votes: number) {
    return (Math.round((votes / this.totalVotes * 100)));
  }

  vote(answerID: number) {
    this.submitted = true;
    this._voteService.addVote(new Vote(parseInt(localStorage.getItem("userID")), answerID)).subscribe(result => {
      this.refreshCurrentPoll();
    }, error => {
      console.log(error);
    })
  }

}

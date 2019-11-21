import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
faPlus = faPlus;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPoll() {
    this.router.navigate(['/newPoll']);
  }

}

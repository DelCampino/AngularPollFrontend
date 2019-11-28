import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate.service';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  submitted = false;
  votes = 0;
  users = 0;
  polls = 0;
  faInfoCircle = faInfoCircle;


  constructor(private _authenticateService: AuthenticateService, private _infoService: InfoService, private router: Router) {
    this._infoService.refreshInfo.subscribe(e=> {
      this._infoService.getPollCount().subscribe(result => {
        this.polls = result;
      });
  
      this._infoService.getUserCount().subscribe(result => {
        this.users = result;
      });
  
      this._infoService.getVoteCount().subscribe(result => {
        this.votes = result;
      });
      })
  }

  ngOnInit() {

  }


  logout() {
    this._authenticateService.logout();
    this.submitted = false;
    this.router.navigate(['/']);
  }

}

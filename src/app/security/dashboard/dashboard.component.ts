import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submitted = false;

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this._authenticateService.logout();
    this.submitted = false;
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
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

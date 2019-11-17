import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldAngular';
  username = "";

  constructor (private _authenticateService : AuthenticateService) {
    this._authenticateService.checkUser();
    //this._authenticateService.logout();; *DEV MODE*
    this._authenticateService.isLoggedin.subscribe(e=> {
      this.username = localStorage.getItem("username");
      })
  };

}

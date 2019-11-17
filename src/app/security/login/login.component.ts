import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../authenticate.service';
import { UserLogin } from '../models/user-login.model';
import { faKey, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ValidatorFn, ValidationErrors, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: UserLogin = new UserLogin('', '');
  submitted: boolean = false;
  faKey = faKey;
  faExclamationTriangle = faExclamationTriangle;
  invalidLogin = false;
  validUser = false;

  constructor(private _authenticateService: AuthenticateService, private router: Router) {
    this._authenticateService.isLoggedin.subscribe(e => { this.validUser = e });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(
      result => {
        this._authenticateService.setUser(result);
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        this.invalidLogin = false;
        this.router.navigate(["dashboard"])
      },
      error => {
        console.log(error);
        if (error.error.message == "Email or password is incorrect") {
          this.invalidLogin = true;
          this.submitted = false;
        } else { alert(error.message) };

      }
    );
  }


  logout() {
    this._authenticateService.logout();
    this.submitted = false;
  }




}

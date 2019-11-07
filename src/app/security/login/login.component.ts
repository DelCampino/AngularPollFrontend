import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { UserLogin } from '../models/user-login.model';
import { faKey, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ValidatorFn, ValidationErrors, FormGroup, NgForm } from '@angular/forms';

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
  
  constructor(private _authenticateService: AuthenticateService) { }

  ngOnInit() {
    if (this._authenticateService.getToken() == null) {

    };
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(this.model);
    this._authenticateService.authenticate(this.model).subscribe(
      result => {
        this.invalidLogin = false;
        this._authenticateService.setToken(result.token);
      },
      HttpErrorResponse => {
        this.invalidLogin = true;
        console.log(this.invalidLogin)
        this.submitted = false;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { UserLogin } from '../models/user-login.model';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model : UserLogin = new UserLogin('','');
  submitted : boolean = false;
  faKey = faKey;
  constructor(private _authenticateService : AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(result => {
    localStorage.setItem("token",result.token);
    });
  }

}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  return formGroup.get('password').value === formGroup.get('password2').value ?
    null : { 'passwordMismatch': true };
}

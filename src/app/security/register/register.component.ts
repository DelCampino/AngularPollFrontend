import { Component, OnInit } from '@angular/core';
import { faKey, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AuthenticateService } from '../authenticate.service';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { UserRegister } from '../models/user-register.model';
import { ok } from 'assert';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: UserRegister = new UserRegister('', '', '');
  submitted: boolean = false;
  faKey = faKey;
  faExclamationTriangle = faExclamationTriangle;
  takenUsername = false;
  takenEmail = false;

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this._authenticateService.register(this.model).subscribe(data => {
      this.takenUsername = false;
      this.takenEmail = false;
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      if (error.error.message == "username taken") {
        this.takenUsername = true;
      } else { this.takenUsername = false }
      if (error.error.message == "email taken") {
        this.takenEmail = true;
      } else { this.takenEmail = false }
      this.submitted = false;
    });
  }

}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialised yet
    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
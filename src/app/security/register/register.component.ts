import { Component, OnInit } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { UserLogin } from '../models/user-login.model';
import { AuthenticateService } from '../authenticate.service';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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

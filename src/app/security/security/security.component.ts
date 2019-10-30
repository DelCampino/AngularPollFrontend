import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { UserLogin } from '../models/user-login.model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  model : UserLogin = new UserLogin('','');
  submitted : boolean = false;

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

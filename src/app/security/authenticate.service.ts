import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { UserLogin } from './models/user-login.model';
import { UserRegister } from './models/user-register.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  constructor(private _httpClient: HttpClient) { }
  authenticate(userLogin: UserLogin): Observable<User> {
    console.log(userLogin);
    return this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userLogin);
  }

  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  logout() {
    localStorage.removeItem("token");
  }
  
  register(userRegister: UserRegister): Observable<Object> {
    console.log(userRegister);
    return this._httpClient.post<Object>("https://localhost:5001/api/User/register", userRegister);
  }
}
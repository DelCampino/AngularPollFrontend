import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './security/models/user.model';
import { UserLogin } from './security/models/user-login.model';
import { UserRegister } from './security/models/user-register.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  setUser(result: User) {
    localStorage.setItem("token", result.token);
    localStorage.setItem("username", result.username);
    localStorage.setItem("email", result.email);
    localStorage.setItem("userID", result.userID + "");
  }
  constructor(private _httpClient: HttpClient) { }

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userLogin);
  }

  isLoggedin = new BehaviorSubject(false);

  getToken(): string {
    return localStorage.getItem("token");
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    localStorage.removeItem("email");
    this.isLoggedin.next(false);
  }
  
  register(userRegister: UserRegister): Observable<Object> {
    return this._httpClient.post<Object>("https://localhost:5001/api/User/register", userRegister);
  }

  checkUser() {
    if (localStorage.getItem("token") && localStorage.getItem("username") && localStorage.getItem("userID") && localStorage.getItem("email")) {
      this.isLoggedin.next(true);
    } else {
      this.isLoggedin.next(false);
    }
  }
}
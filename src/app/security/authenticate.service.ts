import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { UserLogin } from './models/user-login.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  constructor(private _httpClient: HttpClient) { }
  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userLogin);
  }
  getToken(): string {
    return localStorage.getItem("token");
  }
  setToken(token: string): void {
    localStorage.setItem("token", token);
  }
  register(user: User): Observable<User> {
    console.log(user);
    return this._httpClient.post<User>("https://localhost:5001/api/User/register", user);
  }
}
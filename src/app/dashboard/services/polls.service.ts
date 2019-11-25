import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  chosenPoll = new BehaviorSubject([]);
  
  constructor(private _httpClient: HttpClient) { }

  getUserPolls(): Observable<Object[]> {
    var userID = localStorage.getItem("userID");
    return this._httpClient.get<Object[]>("https://localhost:5001/api/User/UserWithPolls/" + userID);
  }

  getCreatedPolls(): Observable<Object[]> {
    var userID = localStorage.getItem("userID");
    return this._httpClient.get<Object[]>("https://localhost:5001/api/Poll/CreatedPolls/" + userID);
  }

  getPoll(id: number): Observable<Object[]> {
    return this._httpClient.get<Object[]>("https://localhost:5001/api/Poll/" + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  refreshInfo = new BehaviorSubject(false);
  
  constructor(private _httpClient: HttpClient) { 
  }

  getPollCount(): Observable<number> {
    return this._httpClient.get<number>("https://localhost:5001/api/Poll/count");
  }

  getUserCount(): Observable<number> {
    return this._httpClient.get<number>("https://localhost:5001/api/User/count");
  }

  getVoteCount(): Observable<number> {
    return this._httpClient.get<number>("https://localhost:5001/api/Vote/count");
  }
}

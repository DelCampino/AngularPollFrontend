import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private _httpClient: HttpClient) { }
  
  addPoll(poll: Poll): Observable<Poll> {
    return this._httpClient.post<Poll>("https://localhost:5001/api/Poll", poll);
  }
}

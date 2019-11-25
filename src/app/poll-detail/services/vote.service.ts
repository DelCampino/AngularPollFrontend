import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vote } from '../models/vote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private _httpClient: HttpClient) { }

  addVote(vote: Vote): Observable<Vote> {
    return this._httpClient.post<Vote>("https://localhost:5001/api/Vote", vote);
  }
}

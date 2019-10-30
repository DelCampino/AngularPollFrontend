import { Member } from './models/member.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MemberService {
  constructor(private http: HttpClient) { }
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>("https://localhost:5001/api/member", {
    });
  }
}
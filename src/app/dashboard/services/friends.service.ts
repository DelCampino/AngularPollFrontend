import { Injectable } from '@angular/core';
import { Friendrequest } from '../models/friendrequest.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/security/models/user.model';
import { Friendslist } from '../models/friendslist.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private _httpClient: HttpClient) { }

  sendFriendrequest(friend: Friendrequest): Observable<Friendrequest> {
    friend.userID = parseInt(localStorage.getItem("userID"));
    console.log(friend);
    return this._httpClient.post<Friendrequest>("https://localhost:5001/api/FriendsList/addFriendrequest", friend);
  }

  getFriendrequests(): Observable<Object[]> {
    var userID = localStorage.getItem("userID");
    return this._httpClient.get<Object[]>("https://localhost:5001/api/FriendsList/Friendrequests/" + userID);
  }

  confirmFriendrequest(id: number) {
    return this._httpClient.get<number>("https://localhost:5001/api/FriendsList/confirm/" + id)
  }

  denyFriendrequest(id: number) {
    return this._httpClient.delete("https://localhost:5001/api/FriendsList/" + id);
  }

  getFriends(): Observable<Object[]> {
    var userID = localStorage.getItem("userID");
    return this._httpClient.get<Object[]>("https://localhost:5001/api/FriendsList/Friends/" + userID);
  }
}

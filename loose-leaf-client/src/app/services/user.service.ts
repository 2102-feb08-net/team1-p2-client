import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId : number | null =  null;

  constructor(private auth : AuthService, private http: HttpClient) { }

  getUserId() : number | null {
      if(this.userId)
      {
        return this.userId;
      }
      else
      {
        throw new Error('User Id was not calculated correctly.');
      }
  }

  calculateUserId() {
    return this.http.put<number>(environment.serverUrl + `/api/users`, null).subscribe(id => this.userId = id);
  }


  getAllUsers() {
    try {
      return this.http.get(environment.serverUrl + "/api/users").toPromise();
    } catch (e) {
      throw new Error(`error getting all users: ${e}`);
    }
  }

  getUsersBooks(id: number) {
    try {
      return this.http.get(environment.serverUrl + `/api/users/${id}/books`).toPromise();
    } catch (e) {
      throw new Error(`error getting all books for user with id ${id}: ${e}`);
    }
  }
}

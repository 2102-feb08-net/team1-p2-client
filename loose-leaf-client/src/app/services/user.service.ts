import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUsers() {
    try {
      return this.http.get(environment.serverURL + "/api/users").toPromise();
    } catch (e) {
      throw new Error(`error getting all users: ${e}`);
    }
  }

  getUsersBooks(id: number) {
    try {
      return this.http.get(environment.serverURL + `/api/users/${id}/books`).toPromise();
    } catch (e) {
      throw new Error(`error getting all books for user with id ${id}: ${e}`);
    }
  }
}

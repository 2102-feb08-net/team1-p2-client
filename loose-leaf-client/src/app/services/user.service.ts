import { OwnedBook } from './../interfaces/owned-book-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

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


  getRecommendedBooks(userId : number): Observable<Book[]> {
    return this.http.get<Book[]>(environment.serverUrl + `/api/users/${userId}/recommendations`);
  }

}

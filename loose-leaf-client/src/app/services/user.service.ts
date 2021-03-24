import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { Book, ISBN } from '../interfaces/book';
import { Observable } from 'rxjs';
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

  addUserBook(userId: number, _isbn: ISBN, _availability: number, _condition: number) {
    try {
      let ownedBook = {
        isbn: `${_isbn}`,
        availabilityStatus: _availability,
        conditionStatus: _condition
      }

      return this.http.post(environment.serverUrl + `/api/users/${userId}/book`, ownedBook).toPromise();
    } catch (e) {
      throw new Error(`error adding a book for user with id ${userId}: ${e}`);
    }
  }


  getRecommendedBooks(userId : number): Observable<Book[]> {
    return this.http.get<Book[]>(environment.serverUrl + `/api/users/${userId}/recommendations`);
  }

}

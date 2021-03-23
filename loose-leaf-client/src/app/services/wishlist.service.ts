import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(userId : number): Observable<Book[]> {
    return this.http.get<Book[]>(environment.serverUrl + `/api/users/${userId}/wishlist`);
  }

  addBookToWishlist(userId : number, bookId : number) {
    const options = { params: new HttpParams({fromString: `bookId=${bookId}`}) };
    return this.http.post(environment.serverUrl + `/api/users/${userId}/wishlist`, options);
  }

  removeBookFromWishlist(userId : number, bookId : number) {
    return this.http.delete(environment.serverUrl + `/api/users/${userId}/wishlist/${bookId}`);
  }
}

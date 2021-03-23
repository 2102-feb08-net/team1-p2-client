import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  appendedUrl: string = "";
  constructor(private httpClient: HttpClient) {}

  getAllBooks() {
    try {
      return this.httpClient.get(environment.serverUrl + "/api/books").toPromise();
    } catch (e) {
      throw new Error(`error getting all books: ${e}`);
    }
  }

  getBookByGenre(searchTerm: string) {
    return this.httpClient.get(environment.serverUrl + `/api/books/genre=${searchTerm})`).toPromise();
  }

  searchBooks(author: string, genre: string, title: string) {
    if (author || genre || title) {
      this.appendedUrl += '?';
    }
    return this.httpClient.get(environment.serverUrl + this.appendedUrl);
  }
}

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
      return this.httpClient.get(environment.serverURL + "/api/books").toPromise();
    } catch (e) {
      throw new Error(`error getting all books: ${e}`);
    }
  }

  searchBooks(author: string, genre: string, title: string) {
    try {
      if (title || author || genre) {
        this.appendedUrl += '?';
      }
      if (title) {
        this.appendedUrl += `author=${title}&`;
      }
      if (author) {
        this.appendedUrl += `author=${author}&`;
      }
      if (genre) {
        this.appendedUrl += `title=${genre}&`;
      }
      return this.httpClient.get(environment.serverURL + this.appendedUrl).toPromise();
    } catch (e) {
      throw new Error(`error getting selection: ${e}`);
    }
  }
}

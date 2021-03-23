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

  searchBooks(title: string, author: string, genre: string) {
    if (title || author || genre) {
      this.appendedUrl += '?';
    }
    if (title) {
      this.appendedUrl += `title=${title}&`;
    }
    if (author) {
      this.appendedUrl += `author=${author}&`;
    }
    if (genre) {
      this.appendedUrl += `genre=${genre}&`;
    }
    return this.httpClient.get(environment.serverUrl + this.appendedUrl);
  }
}

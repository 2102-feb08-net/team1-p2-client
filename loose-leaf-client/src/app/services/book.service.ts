import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  appendedUrl: string = "";
  booksUrl = environment.serverUrl.concat('/api/books');
  constructor(private httpClient: HttpClient) {}

  getAllBooks() {
    try {
      return this.httpClient.get(environment.serverUrl + "/api/books").toPromise();
    } catch (e) {
      throw new Error(`error getting all books: ${e}`);
    }
  }

  addParamToUrl(category: string, field: string): string {
    return field ? `${category}=${field}&` : '';
  }

  searchBooks(title: string, author: string, genre: string) {
    if (title || author || genre) {
      this.appendedUrl += '?';
    }
    this.appendedUrl = this.appendedUrl.concat(this.addParamToUrl('title', title))
      .concat(this.addParamToUrl('author', author))
      .concat(this.addParamToUrl('genre', genre));
    return this.httpClient.get(this.booksUrl.concat(this.appendedUrl));
  }
}

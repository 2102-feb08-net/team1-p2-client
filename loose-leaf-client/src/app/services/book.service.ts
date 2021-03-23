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

  addParamToUrl(url: string, field: string): string {
    return url.concat(field ? `field=${field}&` : '');
  }

  searchBooks(title: string, author: string, genre: string) {
    (title || author || genre) ? this.addParamToUrl(this.appendedUrl, '?') : '';

    this.addParamToUrl(this.appendedUrl, title);
    this.addParamToUrl(this.appendedUrl, author);
    this.addParamToUrl(this.appendedUrl, genre);

    return this.httpClient.get(environment.serverUrl + this.appendedUrl);
  }
}

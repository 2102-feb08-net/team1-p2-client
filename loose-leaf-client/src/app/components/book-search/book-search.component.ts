import { Component, OnInit } from '@angular/core';
import { Book } from '../../book-interface';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  //searchTerm: string;    //add searchTerm to panel
  books: Book[] = [];
  selectedBook: Book;
  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {}

  searchByTerm(searchTerm: string) {
    this.bookService.getBookFromApi(searchTerm).subscribe((response: Book) => {
      this.books = this.books.concat(response);
      this.selectedBook = response;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  searchTerm: string = "";   
  books: Book[] = [];
  selectedBook?: Book;
  searchAuthor: string;
  searchTitle: string;
  searchGenre: string;
  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {}

  searchByTerm(searchTerm: string) {
    this.bookService.getBookFromApi(searchTerm).subscribe(response => {
      this.books = this.books.concat(response as Book);
      this.selectedBook = response as Book;
    });
  }
}
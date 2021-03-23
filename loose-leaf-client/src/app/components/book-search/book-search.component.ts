import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  searchForm = new FormGroup({
    searchTitle: new FormControl(''),
    searchAuthor: new FormControl(''),
    searchGenre: new FormControl(''),
  })
  bookList: Book[] = [];
  selectedBook = {} as Book;


  constructor(private readonly bookService: BookService) {
    
  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getAllBooks().then(resp => 
      {
        this.bookList = resp as Book[];
      });
  }

  search() {
    // this.bookService.searchBooks(this.searchForm.get('author')?.value as string, 
    //   this.searchForm.get('genre')?.value, this.searchForm.get('title')?.value).subscribe((response: Book[]) => {

    //   };


  }
}


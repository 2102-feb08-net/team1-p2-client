import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { RequestModalComponent } from 'src/app/modals/request-modal/request-modal.component';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  searchTitle= new FormControl('');
  searchAuthor= new FormControl('');
  searchGenre= new FormControl('');
  bookList: Book[] = [];
  selectedBooks: Book[] = [];
  genreList: string[];

  constructor(private readonly bookService: BookService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  search() {
    this.bookService.searchBooks(this.searchTitle.value, this.searchAuthor.value,
      this.searchGenre.value).subscribe((response) => {
        this.bookList = this.bookList.concat(response as Book);
    })
  }

  addBook = (book: Book): boolean => {
    this.selectedBooks.push(book);
    console.log(this.selectedBooks);
    return true;
  }

  removeBook = (book: Book): boolean => {
    let i = this.selectedBooks.findIndex((ob => ob.id === book.id));
    this.selectedBooks.splice(i, 1);
    console.log(this.selectedBooks);
    return true;
  }
}


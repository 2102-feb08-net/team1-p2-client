import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private readonly bookService: BookService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  search() {
    this.bookService.searchBooks(this.searchTitle.value, this.searchAuthor.value,
      this.searchGenre.value).toPromise().then((response) => {
        this.bookList = response as Book[];
        this.searchTitle.setValue("");
        this.searchAuthor.setValue("");
        this.searchGenre.setValue("");
    });
    
  }

  addBook = (book: Book): boolean => {
    let id = this.userService.getUserId();
    this.userService.addUserBook(id, book.isbn, 1, 1).then(() => {return true;});
    return false;
  }

  removeBook = (book: Book): boolean => {
    let i = this.selectedBooks.findIndex((ob => ob.id === book.id));
    this.selectedBooks.splice(i, 1);
    console.log(this.selectedBooks);
    return true;
  }
}


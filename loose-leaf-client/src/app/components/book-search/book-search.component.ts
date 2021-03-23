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
  searchTitle= new FormControl('');
  searchAuthor= new FormControl('');
  searchGenre= new FormControl('');
  bookList: Book[] = [];

  constructor(private readonly bookService: BookService) {
  }

  ngOnInit(): void {
  }

  search() {
    debugger;
    this.bookService.searchBooks(this.searchTitle.value, this.searchAuthor.value,
      this.searchGenre.value).subscribe((response) => {
        debugger;
        this.bookList = this.bookList.concat(response as Book);
      
    })
  }

  // search() {
  //   this.bookService.searchBooks(this.searchForm.get('searchTitle')?.value as string, this.searchForm.get('searchAuthor')?.value as string,
  //     this.searchForm.get('searchGenre')?.value as string).subscribe;
  // }
}


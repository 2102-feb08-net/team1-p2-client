import { Component, Input, OnInit } from '@angular/core';
import { OwnedBook } from 'src/app/interfaces/owned-book-interface';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {
  @Input() book: OwnedBook;
  @Input() addBook: (book: OwnedBook) => boolean;
  @Input() removeBook: (book: OwnedBook) => boolean;
  beingBorrowed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  canBorrow() {
    if (this.book?.availability! === "Available") {
      return true;
    }

    return false;
  }

  getAvailabilityClass() {
    if (this.book?.availability! === "Available") {
      return "status-good";
    }
    if (this.book?.availability! === "Checked Out") {
      return "status-bad";
    }
    else {
      return "status-unsure";
    }
  }

  add() {
    if (this.addBook != undefined) {
      this.beingBorrowed = this.addBook(this.book);
    }
  }

  remove() {
    if (this.removeBook != undefined) {
      this.beingBorrowed = !this.removeBook(this.book);
    }
  }
}

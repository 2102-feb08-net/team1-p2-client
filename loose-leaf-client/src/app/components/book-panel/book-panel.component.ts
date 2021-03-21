import { Component, Input, OnInit } from '@angular/core';
import { OwnedBook } from 'src/app/interfaces/owned-book-interface';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {
  @Input() book: OwnedBook | undefined;
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
}

import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { OwnedBook } from 'src/app/interfaces/owned-book-interface';
import { WishlistService } from 'src/app/services/wishlist.service';

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
  userwishlist: Book[] = [];
  onWishlist: boolean = false;
  constructor(private wishlistService: WishlistService) {

  }

  ngOnInit(): void {
    this._getWishList();
  }

  private _getWishList() {
    // TODO: add a real user ID
    this.wishlistService.getWishlist(1).subscribe(resp => {
      this.userwishlist = resp;
      this.onWishlist = this.isOnWishlist();
    });
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

  addToWishlist() {
    // TODO: add a real user ID
    this.onWishlist = true;
    this.wishlistService.addBookToWishlist(1, this.book.id).toPromise().then(() => this._getWishList());
  }

  removeFromWishlist() {
    // TODO: add a real user ID
    this.onWishlist = false;
    this.wishlistService.removeBookFromWishlist(1, this.book.id).toPromise().then(() => this._getWishList());
  }

  isOnWishlist() {
    let i = this.userwishlist.findIndex((b) => {
      return b.isbn === this.book.book.isbn;
    });
    return (i != -1);
  }
}

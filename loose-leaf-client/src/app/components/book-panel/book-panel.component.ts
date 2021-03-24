import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { OwnedBook } from 'src/app/interfaces/owned-book-interface';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private userService: UserService, private wishlistService: WishlistService) {

  }

  ngOnInit(): void {
    this._getWishlist();
  }

  private _getWishlist() {
    let id = this.userService.getUserId();
    this.wishlistService.getWishlist(id).subscribe(resp => {
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
    let id = this.userService.getUserId();
    this.onWishlist = true;
    this.wishlistService.addBookToWishlist(id, this.book.id).toPromise().then(() => this._getWishlist());
  }

  removeFromWishlist() {
    let id = this.userService.getUserId();
    this.onWishlist = false;
    this.wishlistService.removeBookFromWishlist(id, this.book.id).toPromise().then(() => this._getWishlist());
  }

  isOnWishlist() {
    let i = this.userwishlist.findIndex((b) => {
      return b.isbn === this.book.book.isbn;
    });
    return (i != -1);
  }
}

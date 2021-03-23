import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {
  @Input() book: Book;
  @Input() addBook: (book: Book) => boolean;
  @Input() userOwnsBook: boolean = false; 
  
  userwishlist: Book[] = [];
  onWishlist: boolean = false;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this._getWishlist();
  }

  private _getWishlist() {
    // TODO: add a real user ID
    this.wishlistService.getWishlist(1).subscribe(resp => {
      this.userwishlist = resp;
      this.onWishlist = this.isOnWishlist();
    });
  }

  isOnWishlist() {
    let i = this.userwishlist.findIndex((b) => {
      return b.isbn === this.book.isbn;
    });
    return (i != -1);
  }

  addToWishlist() {
    // TODO: add a real user ID
    this.onWishlist = true;
    this.wishlistService.addBookToWishlist(1, this.book.id).toPromise().then(() => this._getWishlist());
  }

  removeFromWishlist() {
    // TODO: add a real user ID
    this.onWishlist = false;
    this.wishlistService.removeBookFromWishlist(1, this.book.id).toPromise().then(() => this._getWishlist());
  }

  add() {
    if (this.addBook != undefined) {
      this.userOwnsBook = this.addBook(this.book);
    }
  }
}

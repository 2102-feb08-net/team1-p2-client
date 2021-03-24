import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { UserService } from 'src/app/services/user.service';
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

  constructor(private userService: UserService, private wishlistService: WishlistService) { }

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

  isOnWishlist() {
    let i = this.userwishlist.findIndex((b) => {
      return b.isbn === this.book.isbn;
    });
    return (i != -1);
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

  add() {
    if (this.addBook != undefined) {
      this.userOwnsBook = true;
      this.addBook(this.book);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { UserService } from 'src/app/services/user.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public wishlistBooks : Book[] = [];

  constructor(private userService: UserService, private wishlistService : WishlistService) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist()
  {
    let id = this.userService.getUserId();
    this.wishlistService.getWishlist(id)
    .subscribe(b => this.wishlistBooks = b);
  }

  removeBookFromWishlist(bookId : number)
  {
    let id = this.userService.getUserId();
    this.wishlistService.removeBookFromWishlist(id, bookId)
    .subscribe(b => this.getWishlist());
  }

}

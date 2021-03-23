import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public wishlistBooks : Book[] = [];

  constructor(private wishlistService : WishlistService) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist()
  {
    this.wishlistService.getWishlist(1)
    .subscribe(b => this.wishlistBooks = b);
  }

  removeBookFromWishlist(bookId : number)
  {
    this.wishlistService.removeBookFromWishlist(1, bookId)
    .subscribe(b => this.getWishlist());
  }

}

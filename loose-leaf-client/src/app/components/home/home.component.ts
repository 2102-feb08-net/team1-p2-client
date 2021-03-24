import { OwnedBook } from './../../interfaces/owned-book-interface';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { WishlistService } from 'src/app/services/wishlist.service';
import { LoanService } from 'src/app/services/loan.service';
import {Loan } from '../../interfaces/loan-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public wishlistBooks : Book[] = [];
  public recommendedBooks: Book[] = [];
  public loans: Loan[] = [];
  public firstfiveloans: Loan[] = [];
  public firstfivewishlist : Book[] = [];
  constructor(private wishlistService : WishlistService, private userService: UserService, private loanService: LoanService) { }

  ngOnInit(): void {
    this.getWishlist();
    this.getRecommendationLlist();
    this.getUserLoans();
    

  }

  getWishlist()
  {
    this.wishlistService.getWishlist(1)
      .subscribe(b => this.wishlistBooks = b);
      
  }

  getRecommendationLlist() {
   
    this.userService.getRecommendedBooks(1)
      .subscribe(b => this.recommendedBooks = b);

      
  }
  getUserLoans(){
    this.loanService.getUserLoans(1)
      .subscribe(loans => {
        this.loans = loans;
        
        this.firstfiveloans = this.loans.slice(Math.max(loans.length - 3, 0));
        this.firstfivewishlist = this.wishlistBooks.slice(Math.max(loans.length - 5, 0));
      
      });
  }



}

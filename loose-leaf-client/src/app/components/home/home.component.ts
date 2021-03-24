import { ISBN } from './../../interfaces/book';
import { OwnedBook } from './../../interfaces/owned-book-interface';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { WishlistService } from 'src/app/services/wishlist.service';
import { LoanService } from 'src/app/services/loan.service';
import {Loan } from '../../interfaces/loan-interface';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public firstfivewishlist: Book[] = [];
  public ISBN:ISBN;
  public Condition:string;






  constructor(private wishlistService : WishlistService, private userService: UserService, private loanService: LoanService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWishlist();
    this.getRecommendationLlist();
    this.getUserLoans();
    

  }

  getWishlist()
  {
    let id = this.userService.getUserId();
    this.wishlistService.getWishlist(id)
      .subscribe(b => this.wishlistBooks = b);
      
  }

  getRecommendationLlist() {
   
    let id = this.userService.getUserId();
    this.userService.getRecommendedBooks(id)
      .subscribe(b => this.recommendedBooks = b);

      
  }
  getUserLoans(){
    let id = this.userService.getUserId();
    this.loanService.getUserLoans(id)
      .subscribe(loans => {
        this.loans = loans;
        
        this.firstfiveloans = this.loans.slice(Math.max(loans.length - 3, 0));
        this.firstfivewishlist = this.wishlistBooks.slice(Math.max(loans.length - 5, 0));
      
      });
  }


  addBook = () => {
    let c = +this.Condition
    this.userService.addUserBook(this.userService.getUserId(), this.ISBN, 1, c).then(
      () => {
        this._snackBar.open('Book successfully added!', 'Close', {
          duration: 1000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        return true;
      },
      (error) => {
        this._snackBar.open('Book failed to add...', 'Close', {
          duration: 1000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        return false;
      }
    );
  }



}

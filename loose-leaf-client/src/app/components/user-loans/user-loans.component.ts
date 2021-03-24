import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import {Loan } from '../../interfaces/loan-interface';

import {MDCDataTable} from '@material/data-table';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-loans',
  templateUrl: './user-loans.component.html',
  styleUrls: ['./user-loans.component.scss']
})
export class UserLoansComponent implements OnInit {

  public loans : Loan[] = [];
  public pendingLoans : Loan[] = [];
  constructor(private userService: UserService, private loanService: LoanService) { }

  ngOnInit(): void {
    this.getLoans();
    this.getLoanRequests();
  }

  getLoans(){
    let id = this.userService.getUserId();
    this.loanService.getUserLoans(id)
    .subscribe(loans => this.loans = loans);
  }

  getLoanRequests() {
    let id = this.userService.getUserId();
    this.loanService.getUserLoanRequests(id).subscribe(requests => this.pendingLoans = requests);
  }

  updateLoanStatus(loanId : number, status : number)
  {
    this.loanService.updateLoanStatus(loanId, status).subscribe(() => {
      this.getLoans();
      this.getLoanRequests();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import {Loan } from '../../interfaces/loan-interface';

import {MDCDataTable} from '@material/data-table';


@Component({
  selector: 'app-user-loans',
  templateUrl: './user-loans.component.html',
  styleUrls: ['./user-loans.component.scss']
})
export class UserLoansComponent implements OnInit {

  public loans : Loan[] = [];
  public pendingLoans : Loan[] = [];
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.getLoans();
    this.getLoanRequests();
  }

  getLoans(){
    this.loanService.getUserLoans(1)
    .subscribe(loans => this.loans = loans);
  }

  getLoanRequests() {
    this.loanService.getUserLoanRequests(1).subscribe(requests => this.pendingLoans = requests);
  }

  updateLoanStatus(loanId : number, status : number)
  {
    this.loanService.updateLoanStatus(loanId, status).subscribe(() => {
      this.getLoans();
      this.getLoanRequests();
    })
  }
}

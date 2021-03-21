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
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans(){
    this.loanService.getLoans()
    .subscribe(loans => this.loans = loans);
  }
}

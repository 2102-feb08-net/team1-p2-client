import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanRequest } from 'src/app/interfaces/loan-interface';
import { OwnedBook } from 'src/app/interfaces/owned-book-interface';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss']
})
export class RequestModalComponent implements OnInit {
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  message: string;

  constructor(private dialogRef: MatDialogRef<RequestModalComponent>, @Inject(MAT_DIALOG_DATA) public data: OwnedBook[], private loanService: LoanService) { }

  ngOnInit(): void {
  }

  submitRequest = async (): Promise<boolean> => {
    console.log("submitting request...");
    try {
      let now = new Date();
      let then = new Date(Date.now() + 12096e5);

      let request: LoanRequest = {
        lenderId: this.data[0].ownerId,
        borrowerId: 4, //TODO: make this something not static
        ownedBookIds: this.getBookIds(this.data),
        startDate: now.toJSON(),
        endDate: then.toJSON(),
        status: 'Requested',
        // address: `${this.streetAddress} ${this.streetAddress2}, ${this.city}, ${this.state} ${this.zipCode}`,
        addressId: 1,
        message: this.message
      }

      let resp = await this.loanService.submitLoan(request);
      console.log(resp);
      return true;
    } catch (e) {
      console.error(`failed to submit request: ${e}`);
      return false;
    }
  }

  close() {
    this.dialogRef.close();
  }

  getBookIds(books: OwnedBook[]): number[] {
    let n = [];
    for (let b of books) {
      n.push(b.id);
    }
    return n;
  }
}

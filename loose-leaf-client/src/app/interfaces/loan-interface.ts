import { BasicUser } from "./basic-user-interface";
import { OwnedBook } from "./owned-book-interface";

export interface Loan {
    id: number;
    lender: BasicUser;
    borrower: BasicUser;
    message: string;
    startDate: string;
    endDate: string;
    address: string;
    loanedBooks : OwnedBook[]
    status: string;
}

export interface LoanRequest {
    lenderId: number;
    borrowerId: number;
    message: string;
    startDate: string;
    endDate: string;
    addressId: number;
    ownedBookIds : number[]
    status: string;
}
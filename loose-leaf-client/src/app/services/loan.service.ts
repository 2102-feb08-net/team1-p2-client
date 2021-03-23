import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Loan, LoanRequest } from '../interfaces/loan-interface';
import { OwnedBook } from '../interfaces/owned-book-interface';
import { User } from '../interfaces/user';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  constructor(public auth: AuthService, private http: HttpClient) {}


  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan>(environment.serverUrl+ `/api/loans/${id}`);
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(environment.serverUrl + `/api/loans`);
  }

  submitLoan(loan: LoanRequest) {
    return this.http.post<LoanRequest>(environment.serverUrl + `/api/loans`, loan, this.httpOptions).subscribe(resp => {
      console.log(resp);
    });
  }

  getUserLoans(userId: number) :Observable<Loan[]> {
    return this.http.get<Loan[]>(environment.serverUrl + `/api/users/${userId}/loans`);
  }

}

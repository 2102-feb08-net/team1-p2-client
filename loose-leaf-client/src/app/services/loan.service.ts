import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Loan, LoanRequest } from '../interfaces/loan-interface';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private endpoint = 'https://looseleafcommunity.azurewebsites.net/api/'

  private accessToken = '';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': `Bearer ${this.accessToken}`})
  };

  constructor(public auth: AuthService, private http: HttpClient) { }

  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan>(this.endpoint + `loans/${id}`);
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.endpoint + `loans`);
  }

  submitLoan(loan: LoanRequest) : Observable<LoanRequest> {
    return this.http.post<LoanRequest>(this.endpoint + `loans`, loan, this.httpOptions);
  }

  getUserLoans() :Observable<Loan[]> {
    return this.http.get<Loan[]>(this.endpoint + `users/1/loans`);
  }

}

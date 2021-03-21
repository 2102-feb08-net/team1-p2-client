import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan, LoanRequest } from '../loan-interface';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private endpoint = 'https://looseleafcommunity.azurewebsites.net/api/'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan>(this.endpoint + `loans/${id}`);
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.endpoint + `loans`);
  }

  submitLoan(loan: LoanRequest) : Observable<LoanRequest> {
    return this.http.post<LoanRequest>(this.endpoint + `loans`, loan, this.httpOptions);
  }
}

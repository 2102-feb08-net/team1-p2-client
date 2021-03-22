import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { LoanService } from './loan.service';

describe('Loan Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoanService]
    });
  });

  it('should be initialized', inject([LoanService], (loanService: LoanService) => {
    expect(loanService).toBeTruthy();
  }));
});

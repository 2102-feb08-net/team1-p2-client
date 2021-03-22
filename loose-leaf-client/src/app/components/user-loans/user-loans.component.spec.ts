import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanService } from 'src/app/services/loan.service';
import { UserLoansComponent } from './user-loans.component';

describe('UserLoansComponent', () => {
  let component: UserLoansComponent;
  let fixture: ComponentFixture<UserLoansComponent>;

  const serviceSpy = jasmine.createSpyObj('LoanService', ['getLoans']);
  const serviceClient= jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoansComponent ],
      imports: [HttpClientModule],
      providers : [
        {provider: LoanService, useValue: serviceSpy},
        {provider: HttpClient, useValue: serviceClient}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

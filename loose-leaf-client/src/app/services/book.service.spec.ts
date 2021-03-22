import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from './book.service';


describe('User Service', () => {
let service : BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.get(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

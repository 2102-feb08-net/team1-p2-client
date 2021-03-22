import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from 'src/app/services/book.service';
import { BookSearchComponent } from './book-search.component';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  const serviceSpy = jasmine.createSpy('BookService');

  const clientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ],
      providers:[
        { provide: BookService, useValue: serviceSpy},
        { provide: HttpClient, useValue: clientSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistService } from 'src/app/services/wishlist.service';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  const serviceSpy = jasmine.createSpyObj('WishlistService', ['getWishlist', 'addBookToWishlist', 'removeBookFromWishlist']);
  const serviceClient= jasmine.createSpyObj('HttpClient', ['get', 'delete']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent ],
      imports: [HttpClientModule],
      providers : [
        {provider: WishlistService, useValue: serviceSpy},
        {provider: HttpClient, useValue: serviceClient}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

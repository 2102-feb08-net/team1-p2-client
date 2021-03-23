import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WishlistService } from './wishlist.service';

describe('Wishlist Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WishlistService]
    });
  });

  it('should be initialized', inject([WishlistService], (service: WishlistService) => {
    expect(service).toBeTruthy();
  }));
});
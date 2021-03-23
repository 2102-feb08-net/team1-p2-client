import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('User Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it('should be initialized', inject([UserService], (userService: UserService) => {
    expect(userService).toBeTruthy();
  }));
});

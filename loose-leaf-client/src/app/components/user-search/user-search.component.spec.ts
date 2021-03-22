import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserService } from 'src/app/services/user.service';

import { UserSearchComponent } from './user-search.component';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  const serviceSpy = jasmine.createSpyObj('UserService', ['search', 'getAllUsers']);
  serviceSpy.getAllUsers.and.returnValue(Promise.resolve({}));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchComponent ],
      imports: [MatAutocompleteModule],
      providers: [
        {provide: UserService, useValue: serviceSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

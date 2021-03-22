import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';

import { UserMetadataComponent } from './user-metadata.component';

class FakePipe {
  subscribe() {}
}


describe('UserMetadataComponent', () => {
  let component: UserMetadataComponent;
  let fixture: ComponentFixture<UserMetadataComponent>;

  let result = new FakePipe();
  let fakeAuth = {
    user$ :{
      pipe() : FakePipe
        { 
         return result; 
        }
    }
  }
  
  const clientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMetadataComponent ],
      providers: [ 
        {provide: AuthService, useValue: fakeAuth},
        {provide: HttpClient, useValue: clientSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

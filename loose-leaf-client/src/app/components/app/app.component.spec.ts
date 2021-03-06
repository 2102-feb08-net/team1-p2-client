import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';

const cookieSpy = jasmine.createSpyObj('CookieService', ['get', 'set']);

describe('AppComponent', () => {
  beforeEach(async () => {

    let fakeAuth = {} as AuthService;

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: CookieService, useValue: cookieSpy},
        {provide: AuthService, useValue: fakeAuth}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'loose-leaf-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('loose-leaf-client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#NavbarTitle').textContent).toContain('Loose Leaf Community');
  });
});

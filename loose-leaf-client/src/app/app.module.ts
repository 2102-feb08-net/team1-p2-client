import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookService } from './services/book.service';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FormsModule } from '@angular/forms';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { BookPanelComponent } from './components/book-panel/book-panel.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserLoansComponent } from './components/user-loans/user-loans.component';
import { UserService } from './services/user.service';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserMetadataComponent } from './components/user-metadata/user-metadata.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PossessivePipe } from './pipes/possessive.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookSearchComponent,
    BookPanelComponent,
    UserDetailsComponent,
    UserLoansComponent,
    UserSearchComponent,
    AuthButtonComponent,
    UserProfileComponent,
    UserMetadataComponent,
    TruncatePipe,
    PossessivePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatChipsModule,
    AuthModule.forRoot({
      domain: 'looseleafcommunity.us.auth0.com',
      clientId: 'igxkfAyb76tmu31PoJNIxqHlFQ6XgmDi',
    
      // Request this audience at user authentication time
      audience: 'https://looseleafcommunity.us.auth0.com/api/v2/',
    
      // Request this scope at user authentication time
      scope: 'read:current_user',            
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://looseleafcommunity.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://looseleafcommunity.us.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://looseleafcommunity.us.auth0.com/api/v2/',
    
              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
  ],
  providers: [
    BookService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

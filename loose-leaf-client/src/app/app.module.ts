import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FormsModule } from '@angular/forms';

import { AuthModule } from '@auth0/auth0-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BookPanelComponent } from './components/book-panel/book-panel.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserLoansComponent } from './components/user-loans/user-loans.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookSearchComponent,
    BookPanelComponent,
    UserDetailsComponent,
    UserLoansComponent,
    AuthButtonComponent,
    UserProfileComponent
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
    AuthModule.forRoot({
      domain: 'looseleafcommunity.us.auth0.com',
      clientId: 'igxkfAyb76tmu31PoJNIxqHlFQ6XgmDi'
    }),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserLoansComponent } from './components/user-loans/user-loans.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "books",
    component: BookSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "lenders",
    component: UserSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "lenders/:username",
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "loans",
    component: UserLoansComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "wishlist",
    component: WishlistComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

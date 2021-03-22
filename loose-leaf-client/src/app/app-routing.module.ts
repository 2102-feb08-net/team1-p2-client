import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserLoansComponent } from './components/user-loans/user-loans.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "books",
    component: BookSearchComponent
  },
  {
    path: "lenders",
    component: UserSearchComponent
  },
  {
    path: "lenders/:username",
    component: UserDetailsComponent
  },
  {
    path: "loans",
    component: UserLoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

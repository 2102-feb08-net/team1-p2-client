import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { OwnedBook } from 'src/app/interfaces/owned-book-interface';
import { UserService } from 'src/app/services/user.service';
import { LoanRequest } from 'src/app/interfaces/loan-interface';
import { MatDialog } from '@angular/material/dialog';
import { RequestModalComponent } from 'src/app/modals/request-modal/request-modal.component';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  userList: User[] = [];
  searchUserName: string | undefined;
  selectedUser: User | undefined;
  selectedUsersBooks: OwnedBook[] = [];

  pickedBooks: OwnedBook[] = [];
  constructor(private us: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUserlist();
  }

  getUserlist() {
    this.us.getAllUsers().then(resp => 
      {
        this.userList = resp as User[];
      });
  }

  search() {
    for(const u of this.userList) {
      if (u.userName === this.searchUserName) {
        this.selectedUser = u;
        break;
      }
    }

    if (this.selectedUser != undefined) {
      this.us.getUsersBooks(this.selectedUser.id).then(resp => {
        this.selectedUsersBooks = resp as OwnedBook[];
        console.log(this.selectedUsersBooks);
      });
    }
    
  }

  addBook = (book: OwnedBook): boolean => {
    this.pickedBooks.push(book);
    console.log(this.pickedBooks);
    return true;
  }

  removeBook = (book: OwnedBook): boolean => {
    let i = this.pickedBooks.findIndex((ob => ob.id === book.id));
    this.pickedBooks.splice(i, 1);
    console.log(this.pickedBooks);
    return true;
  }

  openRequestDialog() {
    this.dialog.open(RequestModalComponent, {data: this.pickedBooks, height: '600px', width: '700px'})
    .afterClosed().subscribe(() => {
      // window.location.reload();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Book } from 'src/app/interfaces/book';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  userList: User[] = [];
  searchUserName: string | undefined;
  selectedUser: User | undefined;
  selectedUsersBooks: Book[] = [];
  constructor(private us: UserService) { }

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
        this.selectedUsersBooks = resp as Book[];
        console.log(this.selectedUsersBooks);
      });
    }
    
  }
}

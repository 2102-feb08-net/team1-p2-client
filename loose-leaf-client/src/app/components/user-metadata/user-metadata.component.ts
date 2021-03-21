import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-metadata',
  templateUrl: './user-metadata.component.html',
  styleUrls: ['./user-metadata.component.scss']
})
export class UserMetadataComponent implements OnInit {
  metadata : any = {};

  // Inject both AuthService and HttpClient
  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.user$
    .pipe(
      concatMap((user) =>
        // Use HttpClient to make the call
        this.http.get(
          encodeURI(`https://looseleafcommunity.us.auth0.com/api/v2/users/${user?.sub}`)
        )
      ),
      pluck('user_metadata'),
      tap((meta) => (this.metadata = meta))
    )
    .subscribe();
  }
}
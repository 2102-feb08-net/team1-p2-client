import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loose-leaf-client';

  constructor(public auth : AuthService, public cookies: CookieService) {}

  public wideSidenav(): boolean {
    const wide = this.cookies.get("wide-sidenav");

    if (wide === "true") {
      return true;
    } else {
      return false;
    }
  }

  public setWideSidenav(val: boolean) {
    this.cookies.set("wide-sidenav", String(val));
  }
}

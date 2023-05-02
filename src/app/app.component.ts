import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const {access_token,refresh_token} = this.tokenStorageService.getUser();
      const helper = new JwtHelperService();

      const {sub} = helper.decodeToken(access_token);

      if(sub){
        this.showAdminBoard = true;
        this.showModeratorBoard = true;
        this.username = sub;}
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

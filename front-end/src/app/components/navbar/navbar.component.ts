import { Component, OnInit } from '@angular/core';
import { AuthGuard } from "../../auth/auth.guard";
import { AuthService } from "../../services/auth.service";
import { Subscription } from 'rxjs';
import {User} from "../../domain/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  login: any;
  notLogin: boolean = true;
  subscription: Subscription;
  currentUser: User;
  currentUserPosition: boolean = false;

  constructor(private authGuard: AuthGuard, private authService: AuthService) {
    this.subscription = this.authGuard.loginStatusObservable.subscribe((data) => {
      console.log(data);
      this.login = data;
      this.notLogin = !data;
      this.currentUser = authService.userLogined;
      if(this.currentUser.position >= 3) {
        console.log("current user position > 3");
        this.currentUserPosition = true;
      }
    });
  }

  ngOnInit() {
    this.login = this.authGuard.isLogin();
    this.notLogin = !this.authGuard.isLogin();
  }

  logout() {
    console.log("logout");
    this.login = false;
    this.notLogin = true;
    this.currentUserPosition = false;
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

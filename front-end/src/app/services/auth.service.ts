import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";

// import { Observable, of } from 'rxjs';
// import { tap, delay } from 'rxjs/operators';
import { UserService } from "./user.service";
import { NzMessageService } from 'ng-zorro-antd';
import { User } from "../domain/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  userLogined: User;

  redirectUrl: string;  //登陆成功后访问的路径

  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private router: Router,
    private authGuard: AuthGuard,
  ) {
    if (localStorage.getItem("userId") || sessionStorage.getItem("userId")) {
      let userId = localStorage.getItem("userId") ? localStorage.getItem("UserId") : sessionStorage.getItem("userId");
      this.userService.getUserById(userId).subscribe((res) => {
        console.log("Get user is", res);
        this.userLogined = res;
        this.isLoggedIn = true;
        authGuard.publicLogin(true);
      })
    }
   };

  login(username: string, password: string, rememberMe: boolean) {
    this.userService.getUserByUsername(username).subscribe((data) => {
      let redirectUrl = (localStorage.getItem('redirectUrl') === null) ?
        '/' : localStorage.getItem('redirectUrl');
      let user = data[0];
      console.log("User login, return user: ", user);
      if (null === user || undefined === user) {
        this.message.info("用户名错误");
        return false;
      } else if (password !== user.password) {
        this.message.info("密码错误");
        return false;
      } else if (password === user.password) {
        this.isLoggedIn = true;
        this.userLogined = user;
        this.router.navigate([redirectUrl]);
        this.authGuard.publicLogin(true);
        this.message.info("登陆成功");
        if (rememberMe) {
          localStorage.setItem("userId", user.id.toString());
          localStorage.setItem("username", user.username);
          sessionStorage.setItem("userId", user.id.toString());
          sessionStorage.setItem("username", user.username);
        } else {
          sessionStorage.setItem("userId", user.id.toString());
          sessionStorage.setItem("username", user.username);
        }
        return true;
      } else {
        this.message.info("网络出错，请重试");
        return false;
      }
    })
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userLogined = null;
    // TODO: 存储当前URL，注销后重新登陆仍然返回当前URL
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }
}
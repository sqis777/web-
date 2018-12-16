import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  rememberLogin: boolean = false;
  // TODO: 用户名/密码输入格式验证
  usernameError: boolean = false;
  usernameErrorMessage: string = "dfdfdf";

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.username, this.password, this.rememberLogin);
  }

}

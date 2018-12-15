import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  rememberLogin: boolean = false;
  usernameError: boolean = false;
  usernameErrorMessage: string = "dfdfdf";

  constructor() { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.username, this.password);
  }

}

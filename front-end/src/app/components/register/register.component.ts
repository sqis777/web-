import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {User} from 'src/app/domain/user';
import {UserService} from "../../services/user.service";

// * @author Sun Qisong
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  visiable = false;
  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  gender: string = "";
  age: number;
  department: string = "";
  position: number = 0;  //当前注册用户的级别
  remainAnnualLeave: number = 10;
  AnnualLeaveLength: number = 10;
  inputErrorMessage: string = "";

  constructor(
    private message: NzMessageService,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  showLayer() {
    this.visiable = true;
  }

  handleOk() {
    if (this.checkInputValue()) {
      this.visiable = false;
      let user: User = {
        id: this.userService.createNewUserId(),
        username: this.username,
        password: this.password,
        age: this.age,
        gender: this.gender,
        department: this.department,
        position: <number>this.position,
        remainAnnualLeave: 10,
        AnnualLeaveLength: 10,
      };
      console.log("You click ok, and the form values is ", user);
      this.userService.createUser(user).subscribe(res => {
        console.log("注册成功, 返回的数据是：", res);
        this.message.remove();
        this.message.success("注册成功, 请使用注册的用户名/密码登陆");
      })
    } else {
      this.message.remove();
      this.message.info(this.inputErrorMessage);
    }
  }

  handleCancel() {
    this.visiable = false;
    console.log("You click cancel");
  }

  /**
   * @description 检查用户输入信息是否满足要求
   * @date 2018-12-16
   * @returns {boolean} 
   * @memberof RegisterComponent
   */
  checkInputValue() {
    // TODO: 用户名验证是否重复
    if (this.username.length <= 5) {
      this.inputErrorMessage = "用户名长度需大于5";
      return false;
    } else if (this.password.length <= 6) {
      this.inputErrorMessage = "密码长度需大于6";
      return false;
    } else if (this.password !== this.confirmPassword) {
      this.inputErrorMessage = "两次输入的密码不相同，请检查";
      return false;
    } else if (this.age === undefined || this.age === null) {
      this.inputErrorMessage = "年龄为必填";
      return false;
    } else if (this.age < 10 || this.age > 80) {
      this.inputErrorMessage = "年龄应为 10 -- 80";
      return false;
    } else if (this.gender === "") {
      this.inputErrorMessage = "性别为必选";
      return false;
    } else if (this.position === undefined) {
      this.inputErrorMessage = "级别为必选";
      return false;
    } else {
      return true;
    }
  }

}

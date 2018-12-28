import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {Record} from "../../domain/record";
import {AuthService} from "../../services/auth.service";
import {AuthGuard} from "../../auth/auth.guard";
import {RecordService} from "../../services/record.service";
import {Subscription} from 'rxjs';
import {User} from "../../domain/user";

// * @author Wu Kexin
@Component({
  selector: 'app-clock-page',
  templateUrl: './clock-page.component.html',
  styleUrls: ['./clock-page.component.less']
})
export class ClockPageComponent implements OnInit {

  records: Record[];
  mood: string = "啷里格啷啦啦啦";
  datas: Record[];

  login: any;
  notLogin: boolean = true;
  subscription: Subscription;
  currentUser: User;
  currentUserPosition: boolean = false;

  constructor(
    private authService: AuthService,
    private recordService: RecordService,
    private message: NzMessageService,
    private authGuard: AuthGuard
  ) {
    this.subscription = this.authGuard.loginStatusObservable.subscribe((data) => {
      console.log(data);
      this.login = data;
      this.notLogin = !data;
      this.currentUser = this.authService.userLogined;
      if(this.currentUser.position >= 3) {
        this.currentUserPosition = true;
      }
    });
  }

  ngOnInit() {
    this.login = this.authGuard.isLogin();
    this.notLogin = !this.authGuard.isLogin();
    this.message.info("加载数据中");
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");
    this.recordService.getRecordByUserId(userId).subscribe((res) => {
      this.message.remove();
      this.message.success("加载成功");
      this.records = res.reverse();
    });
    this.recordService.getRecords().subscribe(data =>this.datas = data);
  }

  inClock() {
    let userId = this.authService.userLogined.id;
    let record: Record = {
      id: this.recordService.createNewRecordId(),
      userId: userId,
      time: new Date(),
      mood: this.mood,
      isLate: false,
    };
    if (record.time.getHours() > 8) {
      record.isLate = true;
    } else {
      record.isLate = false;
    }
    // http request
    this.recordService.createRecord(record).subscribe(() => {
      this.message.success("打卡成功");
      this.recordService.getRecordByUserId(userId).subscribe((res) => {
        this.records = res.reverse();
      })
    });
  }

  outClock() {
    let userId = this.authService.userLogined.id;
    let record: Record = {
      id: this.recordService.createNewRecordId(),
      userId: userId,
      time: new Date(),
      mood: this.mood,
      isLate: false,
    };
    if (record.time.getHours() > 18) {
      record.isLate = true;
    } else {
      record.isLate = false;
    }
    // http request
    this.recordService.createRecord(record).subscribe(() => {
      this.message.success("打卡成功");
      this.recordService.getRecordByUserId(userId).subscribe((res) => {
        this.records = res.reverse();
      })
    });
  }

}

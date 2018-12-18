import { Component, OnInit } from '@angular/core';
import { Record } from "../../domain/record";
// import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-clock-page',
  templateUrl: './clock-page.component.html',
  styleUrls: ['./clock-page.component.less']
})
export class ClockPageComponent implements OnInit {

  records: Record[];
  mood: string = "";

  constructor(
    // private authService: AuthService,
  ) { }

  ngOnInit() {
    this.records = [
      {
        "id": "1545094909357",
        "userId": "1545094909357",
        "time": new Date("2018-11-11 08:00:00"),
        "mood": "高兴",
        "isLate": false
      },
      {
        "id": "1545094909357",
        "userId": "1545094909357",
        "time": new Date("2018-11-11 08:00:00"),
        "mood": "高兴",
        "isLate": false
      }
    ]
  }

  inClock() {
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");
    // record id 的自动升序
    let record: Record = {
      id: "1545094909357",
      userId: "1545094909357",
      time: new Date(),
      mood: this.mood,
      isLate: false,
    };
    if (record.time.getHours() > 8) {
      record.isLate = true;
    } else {
      record.isLate = false;
    }
    // TODO: 上班打卡的后台请求
    console.log("上班打卡, 打卡记录: ", record);
  }

  outClock() {
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");
    // record id 的自动升序
    let record: Record = {
      id: "1545094909357",
      userId: "1545094909357",
      time: new Date(),
      mood: this.mood,
      isLate: false,
    };
    if (record.time.getHours() < 18) {
      // Notice: 如果是下班打卡，早退也会记录到 isLate 属性中
      // 早退的时候 isLate = true
      record.isLate = true;
    } else {
      record.isLate = false;
    }
    // 下班打卡的后台请求
    console.log("下班打卡, 打卡记录: ", record);
  }

}

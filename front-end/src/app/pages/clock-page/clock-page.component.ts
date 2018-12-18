import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "ng-zorro-antd";
import { Record } from "../../domain/record";
import { AuthService } from "../../services/auth.service";
import { RecordService } from "../../services/record.service";

@Component({
  selector: 'app-clock-page',
  templateUrl: './clock-page.component.html',
  styleUrls: ['./clock-page.component.less']
})
export class ClockPageComponent implements OnInit {

  records: Record[];
  mood: string = "啷里格啷啦啦啦";

  constructor(
    private authService: AuthService,
    private recordService: RecordService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.message.info("加载数据中");
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");
    this.recordService.getRecordByUserId(userId).subscribe((res) => {
      this.message.remove();
      this.message.success("加载成功");
      this.records = res.reverse();
    })
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

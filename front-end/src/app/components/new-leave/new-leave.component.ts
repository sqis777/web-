import {Component, OnInit} from '@angular/core';
import {LeaveService} from "../../services/leave.service";
import {NzMessageService} from 'ng-zorro-antd';
import {Leave} from "../../domain/leave";

// * @author Song Qiqi
@Component({
  selector: 'app-new-leave',
  templateUrl: './new-leave.component.html',
  styleUrls: ['./new-leave.component.less']
})
export class NewLeaveComponent implements OnInit {

  today: Date = new Date();

  isVisible: boolean = false;
  id: string = this.leaveService.createNewLeaveId();
  userId: string = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");
  startTime: Date;
  endTime: Date;
  days: number = 0;
  state: number = 0;
  reason: string = "";
  approve_reason = "";
  inputErrorMessage: string = "";

  constructor(
    private leaveService: LeaveService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if (this.checkFormInput()) {
      this.message.remove();
      this.message.info("正在处理");
      let leave:Leave = {
        id: this.leaveService.createNewLeaveId(),
        userId: this.userId,
        startTime: this.startTime,
        endTime: this.endTime,
        days: this.endTime.getDay() - this.startTime.getDay(),
        state: 1,
        reason: this.reason,
        approve_reason: "",
      };
      this.leaveService.createLeave(leave).subscribe(res => {
        console.log("新增外出申请成功，返回的数据为：", res);
        this.message.remove();
        this.message.success("申请成功，等待审批");
        this.leaveService.publicLeavesNeedFresh(true);
        this.isVisible = false;
      })
    } else {
      this.message.remove();
      this.message.info(this.inputErrorMessage);
    }
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  onStartChange(date: Date): void {
    this.startTime = date;
  }

  onEndChange(date: Date): void {
    this.endTime = date;
  }

  startTimeDisableDate = (current: Date): boolean => {
    // Can not select days before today and today
    return current < this.today;
  };

  endTimeDisableDate = (current: Date): boolean => {
    return current < this.startTime;
  }

    /**
   * @description 验证外出申请表单填写是否正确
   * @date 2018-12-18
   * @returns {boolean}
   * @memberof NewOutComponent
   */
  checkFormInput():boolean {
    if (this.id === undefined || this.id === null) {
      this.inputErrorMessage = "程序出现问题了，请注销重新登陆";
      return false;
    } else if (this.userId === undefined || this.userId === null) {
      this.inputErrorMessage = "程序出现问题了，请注销重新登陆";
      return false;
    } else if (this.startTime === undefined) {
      this.inputErrorMessage = "请选择起始时间";
      return false;
    } else if (this.endTime === undefined) {
      this.inputErrorMessage = "请选择截至时间";
      return false;
    } else if (this.reason === "") {
      this.inputErrorMessage = "外出理由为必填";
      return false;
    } else {
      return true;
    }
  }

}

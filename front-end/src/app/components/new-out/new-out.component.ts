import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-new-out',
  templateUrl: './new-out.component.html',
  styleUrls: ['./new-out.component.less']
})
export class NewOutComponent implements OnInit {

  today: Date = new Date();

  isVisible: boolean = false;
  id: number = 12;
  userId: number = 1;
  startTime: Date;
  endTime: Date;
  days: number = 0;
  state: number = 0;
  reason: string = "";

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
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

}

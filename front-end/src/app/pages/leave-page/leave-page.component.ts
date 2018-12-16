import { Component, OnInit } from '@angular/core';
import { Leave } from "../../domain/leave";

@Component({
  selector: 'app-leave-page',
  templateUrl: './leave-page.component.html',
  styleUrls: ['./leave-page.component.less']
})
export class LeavePageComponent implements OnInit {

  leaves: Leave[] = [];
  uncompletedLeaves: Leave[] = [];
  completedLeaves: Leave[] = [];
  uncompletedCount: number = 0;
  hasUncompletedLeave: boolean = false;

  constructor() { }

  ngOnInit() {
    this.leaves = [
      {
        id: 1,
        userId: 1,
        startTime: new Date(),
        endTime: new Date(),
        state: 1,
        reason: "请假回家详情"
      },
      {
        id: 2,
        userId: 1,
        startTime: new Date(),
        endTime: new Date(),
        state: 2,
        reason: "请回家给自己的狗相亲"
      }
    ];
    for (let i = 0; i < this.leaves.length; i++) {
      if (this.leaves[i].state === 1) {
        this.uncompletedLeaves.push(this.leaves[i]);
        this.uncompletedCount++;
      } else {
        this.completedLeaves.push(this.leaves[i]);
      }
    };
    if (this.uncompletedCount > 0) {
      this.hasUncompletedLeave = true;
    }
  }

}

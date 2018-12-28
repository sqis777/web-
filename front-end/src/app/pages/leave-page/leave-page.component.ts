import {Component, OnInit} from '@angular/core';
import {Leave} from "../../domain/leave";
import {Subscription} from 'rxjs';
import {LeaveService} from "../../services/leave.service";

// * @author Fan Lishui
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
  userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");
  subscribeNeedFresh: Subscription;

  constructor(
    private leaveService: LeaveService,
  ) {
    this.subscribeNeedFresh = this.leaveService.hasLeavesNewAOutObservable.subscribe(needFresh => {
      console.log("Leave Page need fresh, receive: ", needFresh);
      if (needFresh) {
        this.leaveService.getLeaveByUserId(this.userId).subscribe(res => {
          this.leaves = res;
          this.analysisLeaves();
        })
      }
    })
  }

  ngOnInit() {
    this.leaveService.getLeaveByUserId(this.userId).subscribe(res => {
      this.leaves = res;
      this.analysisLeaves();
    })
  }

  analysisLeaves() {
    this.uncompletedLeaves = [];
    this.completedLeaves = [];
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
    this.uncompletedLeaves.reverse();
    this.completedLeaves.reverse();
  }

}

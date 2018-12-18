import { Component, OnInit } from '@angular/core';
import { Leave } from '../../domain/leave';
import { Out} from "../../domain/out";

@Component({
  selector: 'app-approve-page',
  templateUrl: './approve-page.component.html',
  styleUrls: ['./approve-page.component.less']
})
export class ApprovePageComponent implements OnInit {

  outs: Out[]=[];
  unCompletedApproveOut: Out[] = [];
  completedApprovedOut: Out[]=[];
  unCompletedOutCount: number = 0;
  hasUncompletedApprovelOut: boolean = false;

  leaves: Leave[]=[];
  unCompletedApproveLeave: Leave[] = [];
  completedApprovedLeave: Leave[]=[];
  unCompletedLeavdCount: number = 0;
  hasUncompletedApprovelLeave: boolean = false;

  constructor() { }

  ngOnInit() {
    this.outs = [
      {
        id: "1545094909357",
        userId: "1545094909357",
        days: 1,
        state: 1,
        reason: "出差调研，参观火星人民的生活状况。",
        approve_reason: ""
      },
      {
        id: "1545094909357",
        userId: "1545094909357",
        days: 2,
        state: 2,
        reason: "出差调研，参观火星人民的生活状况。",
        approve_reason: ""
      }
    ];
    this.leaves = [
      {
        id: "1545094909357",
        userId: "1545094909357",
        days: 3,
        state: 1,
        reason: "来一场说走就走的旅行~",
        approve_reason:""
      },
      {
        id: "1545094909357",
        userId: "1545094909357",
        days: 4,
        state: 2,
        reason: "来一场说走就走的旅行~",
        approve_reason:""
      }
    ];
    for(let i=0; i<this.outs.length;i++){
      if(this.outs[i].state === 1){
        this.unCompletedApproveOut.push(this.outs[i]);
        this.unCompletedOutCount++;
      }else{
        this.completedApprovedOut.push(this.outs[i]);
      };
      if(this.unCompletedOutCount>0){
        this.hasUncompletedApprovelOut = true;
      }
    }
    for(let i=0; i<this.leaves.length;i++){
      if(this.leaves[i].state === 1){
        this.unCompletedApproveLeave.push(this.leaves[i]);
        this.unCompletedLeavdCount++;
      }else{
        this.completedApprovedLeave.push(this.leaves[i]);
      };
      if(this.unCompletedLeavdCount>0){
        this.hasUncompletedApprovelLeave = true;
      }
    }

  }

}

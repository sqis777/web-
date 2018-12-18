import { Component, OnInit } from '@angular/core';
import { Leave } from '../../domain/leave';
import { Out} from "../../domain/out";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { ApproveService } from "../../services/approve.service";

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


  constructor(private http:HttpClient,
              private approveService:ApproveService) { }

  ngOnInit( ) {
    this.getLeaves();
    this.getOuts();




  }

  getOuts():void{
    this.approveService.getOuts().subscribe(outs=>{this.outs = outs;
    console.log(this.outs);
      for (let i = 0; i < this.outs.length; i++) {
        if (this.outs[i].state === 1) {
          this.unCompletedApproveOut.push(this.outs[i]);
          this.unCompletedOutCount++;
        } else {
          this.completedApprovedOut.push(this.outs[i]);
        }
        ;
        if (this.unCompletedOutCount > 0) {
          this.hasUncompletedApprovelOut = true;
        }
      }});

  }
  getLeaves():void{
    this.approveService.getLeaves().subscribe(leaves=>{
      this.leaves = leaves;
      for (let i = 0; i < this.leaves.length; i++) {
        if (this.leaves[i].state === 1) {
          this.unCompletedApproveLeave.push(this.leaves[i]);
          this.unCompletedLeavdCount++;
        } else {
          this.completedApprovedLeave.push(this.leaves[i]);
        }
        ;
        if (this.unCompletedLeavdCount > 0) {
          this.hasUncompletedApprovelLeave = true;
        }
    }}
      )

    };







}

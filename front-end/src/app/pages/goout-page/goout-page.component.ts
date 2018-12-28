import {Component, OnInit} from '@angular/core';
import {Out} from "../../domain/out";
import {OutService} from "../../services/out.service";
import {Subscription} from 'rxjs';
// import { Auth}
// * @author Song Qiqi
@Component({
  selector: 'app-goout-page',
  templateUrl: './goout-page.component.html',
  styleUrls: ['./goout-page.component.less']
})
export class GooutPageComponent implements OnInit {

  outs: Out[] = [];
  uncompletedOuts: Out[] = [];
  completedOuts: Out[] = [];
  uncompletedCount: number = 0;
  hasUncompletedOut: boolean = false;
  subscribeNeedFresh: Subscription;
  userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId");

  constructor(
    private outService: OutService,
  ) {
    this.subscribeNeedFresh = this.outService.hasNewAOutObservable.subscribe(needFresh =>{
      console.log("Need fresh, receive: ", needFresh);
      if (needFresh) {
        this.outService.getOutByUserId(this.userId).subscribe(res => {
          this.outs = res;
          this.analysisOuts();
        })
      }
    })
  }

  ngOnInit() {
    this.outService.getOutByUserId(this.userId).subscribe(res => {
      this.outs = res;
      this.analysisOuts();
    })
  }

  /**
   * @description 将 outs 分成 完成审批的 和 未完成审批的
   * @date 2018-12-18
   * @memberof GooutPageComponent
   */
  analysisOuts() {
    this.uncompletedOuts = [];
    this.completedOuts = [];
    for (let i = 0; i < this.outs.length; i++) {
      if (this.outs[i].state === 1) {
        this.uncompletedOuts.push(this.outs[i]);
        this.uncompletedCount++;
      } else {
        this.completedOuts.push(this.outs[i]);
      }
    };
    if (this.uncompletedCount > 0) {
      this.hasUncompletedOut = true;
    };
    this.uncompletedOuts.reverse();
    this.completedOuts.reverse();
  }

}

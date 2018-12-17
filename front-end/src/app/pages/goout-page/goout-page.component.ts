import { Component, OnInit } from '@angular/core';
import { Out } from "../../domain/out";

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

  constructor() { }

  ngOnInit() {
    this.outs = [
      {
        id: 1,
        userId: 1,
        days:1,
        state: 1,
        reason: "出差调研，参观火星人民的生活状况。",
        approve_reason:""
      },
      {
        id: 2,
        userId: 1,
        days:2,
        state: 2,
        reason: "出差调研，参观火星人民的生活状况。",
        approve_reason:""
      }
    ];
    for (let i = 0; i < this.outs.length; i++) {
      if (this.outs[i].state === 1) {
        this.uncompletedOuts.push(this.outs[i]);
        this.uncompletedCount ++;
      } else {
        this.completedOuts.push(this.outs[i]);
      }
    };
    if (this.uncompletedCount > 0) {
      this.hasUncompletedOut= true;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annual-page',
  templateUrl: './annual-page.component.html',
  styleUrls: ['./annual-page.component.less']
})
export class AnnualPageComponent implements OnInit {

  remainAnnualLeave: number = 0;
  annualLeaveLength: number = 0;

  constructor() { }

  ngOnInit() {
    this.remainAnnualLeave = 5;
    this.annualLeaveLength = 10;
  }

}

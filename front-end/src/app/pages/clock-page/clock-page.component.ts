import { Component, OnInit } from '@angular/core';
import { Record } from "../../domain/record";

@Component({
  selector: 'app-clock-page',
  templateUrl: './clock-page.component.html',
  styleUrls: ['./clock-page.component.less']
})
export class ClockPageComponent implements OnInit {

  records: Record[];

  constructor() { }

  ngOnInit() {
    this.records = [
      {
        "id": 1,
        "userId": 1,
        "time": "2018-11-11 08:00:00",
        "mood": "高兴",
        "isLate": false
      },
      {
        "id": 2,
        "userId": 2,
        "time": "2018-11-11 08:00:00",
        "mood": "高兴",
        "isLate": false
      }
    ]
  }




}

import { Component, Input, OnInit } from '@angular/core';
import { Leave } from "../../domain/leave";

@Component({
  selector: 'app-approve-leave-card',
  templateUrl: './approve-leave-card.component.html',
  styleUrls: ['./approve-leave-card.component.less']
})
export class ApproveLeaveCardComponent implements OnInit {
  @Input() leave: Leave;
  constructor() { }

  ngOnInit() {
  }

}

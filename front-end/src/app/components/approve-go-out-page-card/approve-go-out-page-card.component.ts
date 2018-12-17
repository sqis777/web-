import {Component, Input, OnInit} from '@angular/core';
import {Out} from "../../domain/out";

@Component({
  selector: 'app-approve-go-out-page-card',
  templateUrl: './approve-go-out-page-card.component.html',
  styleUrls: ['./approve-go-out-page-card.component.less']
})
export class ApproveGoOutPageCardComponent implements OnInit {

  @Input() out: Out;
  constructor() { }

  ngOnInit() {
  }

}

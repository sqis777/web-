import { Component, OnInit, Input } from '@angular/core';
import { Out } from 'src/app/domain/out';

@Component({
  selector: 'app-goout-page-card',
  templateUrl: './goout-page-card.component.html',
  styleUrls: ['./goout-page-card.component.less']
})
export class GooutPageCardComponent implements OnInit {

  @Input() out: Out;

  constructor() { }

  ngOnInit() {
  }

}

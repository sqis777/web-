import {Component, Input, OnInit} from '@angular/core';
import {Out} from "../../domain/out";
import {ApproveService} from "../../services/approve.service";

// * @author Sun Qisong
@Component({
  selector: 'app-approve-go-out-page-card',
  templateUrl: './approve-go-out-page-card.component.html',
  styleUrls: ['./approve-go-out-page-card.component.less']
})
export class ApproveGoOutPageCardComponent implements OnInit {

  @Input() out: Out;
  constructor(private approvelService:ApproveService) { }

  ngOnInit() {
  }
   approvelOK(){
    this.out.state=2;
     this.approvelService.updateOutApprovel(this.out).subscribe(data=>{
       console.log("Put Request is successful",this.out,data)
     });

  }
  approveNotOK(){
    this.out.state=2;
    this.approvelService.updateOutApprovel(this.out).subscribe(data=>{
      console.log("Put Request is successful",this.out,data)
  });

  }
}

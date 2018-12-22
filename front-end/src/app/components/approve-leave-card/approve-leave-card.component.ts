import {Component, Input, OnInit} from '@angular/core';
import {Leave} from "../../domain/leave";
import {ApproveService} from "../../services/approve.service";

// * @author Fan Lishui
@Component({
  selector: 'app-approve-leave-card',
  templateUrl: './approve-leave-card.component.html',
  styleUrls: ['./approve-leave-card.component.less']
})
export class ApproveLeaveCardComponent implements OnInit {
  @Input() leave: Leave;
  constructor(private approvelService:ApproveService) { }

  ngOnInit() {
  }
  approvelOK(){
    this.leave.state=2;
    this.approvelService.updateLeaveApprovel(this.leave).subscribe(data=>{
      console.log("Put Request is successful",this.leave,data)
    });
  }
  approveNotOK(){
    this.leave.state=2;
    this.approvelService.updateLeaveApprovel(this.leave).subscribe(data=>{
      console.log("Put Request is successful",this.leave,data)
    });
  }

}

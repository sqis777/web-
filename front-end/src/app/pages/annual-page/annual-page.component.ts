import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/annual.service";
import {NzMessageService} from "ng-zorro-antd";
import {User} from 'src/app/domain/user';
import {AuthGuard} from "../../auth/auth.guard";
import {RecordService} from "../../services/record.service";
import {Subscription} from 'rxjs';

// * @author Sun Qisong
@Component({
  selector: 'app-annual-page',
  templateUrl: './annual-page.component.html',
  styleUrls: ['./annual-page.component.less']
})
export class AnnualPageComponent implements OnInit {

  remainAnnualLeave: number = 0;
  annualLeaveLength: number = 0;
  dataSet: User[];
  
  login: any;
  notLogin: boolean = true;
  subscription: Subscription;
  currentUser: User;
  currentUserPosition: boolean = false;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private message: NzMessageService,
    private recordService: RecordService,
    private authGuard: AuthGuard
  ) {
    this.subscription = this.authGuard.loginStatusObservable.subscribe((data) => {
      console.log(data);
      this.login = data;
      this.notLogin = !data;
      this.currentUser = this.authService.userLogined;
      if(this.currentUser.position >= 3) {
        this.currentUserPosition = true;
      }
    });
  }

  ngOnInit() {
    this.remainAnnualLeave = 5;
    this.annualLeaveLength = 10;
    this.dataService. getDatas().subscribe(data =>this.dataSet = data);
    this.login = this.authGuard.isLogin();
    this.notLogin = !this.authGuard.isLogin();
  }

}

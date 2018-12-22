import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';

// * @author Fan Lishui
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private publicLoginStatus = new Subject();
  loginStatusObservable = this.publicLoginStatus.asObservable();

  constructor(private router: Router, private message: NzMessageService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url = state.url;
    let login = localStorage.getItem("username") ? true : false;
    login = sessionStorage.getItem("username") ? true : false;
    if (login) {
      return true;
    } else {
      localStorage.setItem('redirectUrl', url);
      this.router.navigate(['/login']);
      this.message.remove();
      this.message.info("请先进行登录", { nzDuration: 2000 });
      return false;
    }
  }

  /**
   * @description 检查是否已经登陆
   * @memberof AuthGuard
   */
  isLogin(): boolean {
    if (sessionStorage.getItem("userId") !== null) {
      return true;
    } else if (localStorage.getItem("userId") !== null) {
      return true;
    } else {
      return false;
    }
  }

  //发射数据，当调用这个方法的时候，Subject就会发射这个数据，所有订阅了这个Subject的Subscription都会接受到结果
  publicLogin(isLogin: boolean) {
    this.publicLoginStatus.next(isLogin);
  }

}

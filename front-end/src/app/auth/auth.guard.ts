import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let  url = state.url;
      if (this.isLogin()) {
        return true;
      } else {
        localStorage.setItem('redirectUrl', url);
        this.router.navigate(['/login']);
        console.log("请先登录");
        return false;
      }
  }

  /**
   * @description 检查是否已经登陆
   * @memberof AuthGuard
   */
  isLogin = () => {
    if (sessionStorage.getItem("userId") !== null) {
      return true;
    } else {
      return false;
    }
  }
}

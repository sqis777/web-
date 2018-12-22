import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../domain/user";
import {ConfigService} from "./config.service";

import {Observable} from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// * @author Wu Kexin
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api_url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.api_url = `${this.configService.baseUrl}/users`;
  }

  // 使用方法
  // 1. this.userService.getConfig().subscribe(
  //        (data: Config) => this.config = { ...data }
  //    );
  // 2. this.userService.getConfigResponse()
  //   .subscribe(resp => {
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map(key =>
  //       `${key}: ${resp.headers.get(key)}`);
  //     this.config = { ... resp.body };
  //   });


  /**
   * @description 查询所有用户
   * @date 2018-12-15
   * @returns {Observable<User[]>}
   * @memberof UserService
   */
  getUsers(): Observable<User[]> {
    let url = `${this.api_url}`;
    return this.http.get<User[]>(url);
    // return this.http.get<User[]>(url, { observe: 'response' });
  };

  /**
   * @description 根据 userId 查询 user
   * @date 2018-12-15
   * @param {number} id
   * @returns {Observable<User>}
   * @memberof UserService
   */
  getUserById(id: string): Observable<User> {
    let url = `${this.api_url}/${id}`;
    return this.http.get<User>(url);
  };


  /**
   * @description 根据 username 查询 user
   * @date 2018-12-15
   * @param {string} username
   * @returns {Observable<User>}
   * @memberof UserService
   */
  getUserByUsername(username: string): Observable<User> {
    let url = `${this.api_url}/?username=${username}`;
    return this.http.get<User>(url);
  };

  /**
   * @description 新建一个用户
   * @date 2018-12-15
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserService
   */
  createUser(user: User): Observable<User> {
    let url = `${this.api_url}`;
    return this.http.post<User>(url, user, this.httpOptions);
    // .pipe(
    //   catchError(this.handleError('addHero', hero))
    // )
  };

  /**
   * @description 修改某个用户的信息
   * @date 2018-12-15
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserService
   */
  updateUser(user: User): Observable<User> {
    let url = `${this.api_url}/${user.id}`;
    return this.http.put<User>(url, user, this.httpOptions)
  };

  /**
   * @description delete a user by object user
   * @date 2018-12-15
   * @param {User} user
   * @returns {Observable<{}>}
   * @memberof UserService
   */
  deleteUser(user: User): Observable<{}> {
    let url = `${this.api_url}/${user.id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description delete a user by userid
   * @date 2018-12-15
   * @param {number} userId
   * @returns {Observable<{}>}
   * @memberof UserService
   */
  deleteUserByUserId(userId: number): Observable<{}> {
    let url = `${this.api_url}/${userId}`;
    return this.http.delete(url, this.httpOptions);
  };

  updateApprovelReason(userId: number): Observable<{}> {
    let url = `${this.api_url}/${userId}`;
    return this.http.post(url, this.httpOptions);
  };

  /**
   * @description 获取新建用户的ID
   * @date 2018-12-18
   * @returns {string} A new userId
   * @memberof UserService
   */
  createNewUserId(): string {
    let currentTime = new Date();
    return currentTime.getTime().toString();
  }
}

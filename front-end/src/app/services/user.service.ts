import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from "../domain/user";

import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api_url = "http://localhost:3000/users";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

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
   * @author Wu Kexin
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
   * @author Wu Kexin
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
   * @author Wu Kexin
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
   * @author Wu Kexin
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
   * @author Wu Kexin
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
   * @author Wu Kexin
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
   * @author Wu Kexin
   * @date 2018-12-15
   * @param {number} userId
   * @returns {Observable<{}>}
   * @memberof UserService
   */
  deleteUserByUserId(userId: number): Observable<{}> {
    let url = `${this.api_url}/${userId}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description 获取新建用户的ID
   * @author Wu Kexin
   * @date 2018-12-18
   * @returns {string}
   * @memberof UserService
   */
  createNewUserId():string {
    let currentTime = new Date();
    return currentTime.getTime().toString();
  }
}

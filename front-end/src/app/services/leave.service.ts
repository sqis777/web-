import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Leave } from "../domain/leave";

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private api_url = "http://localhost:3000/leaves";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * @description 获取所有的 leave
   * @author Wu Kexin
   * @date 2018-12-18
   * @returns {Observable<Leava[]>}
   * @memberof LeaveService
   */
  getLeaves(): Observable<Leave[]> {
    let url = `${this.api_url}`;
    return this.http.get<Leave[]>(url);
  };

  /**
   * @description 根据 id 获取 leave
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} id
   * @returns {Observable<Leave>}
   * @memberof LeaveService
   */
  getLeaveById(id: string): Observable<Leave> {
    let url = `${this.api_url}/${id}`;
    return this.http.get<Leave>(url);
  };

  /**
   * @description get a leave by userId
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} userId
   * @returns {Observable<Leave>}
   * @memberof LeaveService
   */
  getLeaveByUserId(userId: string): Observable<Leave> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.get<Leave>(url);
  };

  /**
   * @description new a leave 
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {Leave} leave
   * @returns {Observable<Leave>}
   * @memberof LeaveService
   */
  createLeave(leave: Leave): Observable<Leave> {
    let url = `${this.api_url}`;
    return this.http.post<Leave>(url, leave, this.httpOptions);
  };

  /**
   * @description update a leave
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {Leave} leave
   * @returns {Observable<Leava>}
   * @memberof LeaveService
   */
  updateLeave(leave: Leave): Observable<Leave> {
    let url = `${this.api_url}/${leave.id}`;
    return this.http.put<Leave>(url, leave, this.httpOptions);
  };

  /**
   * @description delete a leave by the leave object
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {Leave} leave
   * @returns {Observable<{}>}
   * @memberof LeaveService
   */
  deleteLeave(leave: Leave): Observable<{}> {
    let url = `${this.api_url}/${leave.id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description delete a leave by this id
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} id
   * @returns {Observable<{}>}
   * @memberof LeaveService
   */
  deleteLeaveById(id: string): Observable<{}> {
    let url = `${this.api_url}/${id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description delete a leave by userId
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} userId
   * @returns {Observable<{}>}
   * @memberof OutService
   */
  deleteLeaveByUserId(userId: string): Observable<{}> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description get the new leave item's id
   * @author Wu Kexin
   * @date 2018-12-18
   * @returns {string}
   * @memberof LeaveService
   */
  createNewLeaveId(): string {
    let currentTime = new Date();
    return currentTime.getTime().toString();
  };
}

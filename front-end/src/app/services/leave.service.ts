import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Leave} from "../domain/leave";
import {ConfigService} from "./config.service";

// * @author Fan Lishui
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private api_url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private publicLeavesHasNewAOut = new Subject();
  hasLeavesNewAOutObservable = this.publicLeavesHasNewAOut.asObservable();

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) { 
    this.api_url = `${this.configService.baseUrl}/leaves`;
  }

  /**
   * @description 获取所有的 leave
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
   * @date 2018-12-18
   * @param {string} userId
   * @returns {Observable<Leave>}
   * @memberof LeaveService
   */
  getLeaveByUserId(userId: string): Observable<Leave[]> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.get<Leave[]>(url);
  };

  /**
   * @description new a leave 
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
   * @date 2018-12-18
   * @returns {string}
   * @memberof LeaveService
   */
  createNewLeaveId(): string {
    let currentTime = new Date();
    return currentTime.getTime().toString();
  };

  //发射数据，当调用这个方法的时候，Subject就会发射这个数据，所有订阅了这个Subject的Subscription都会接受到结果
  publicLeavesNeedFresh(needFresh: boolean) {
    this.publicLeavesHasNewAOut.next(needFresh);
  }
}

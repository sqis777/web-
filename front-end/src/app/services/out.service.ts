import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Out} from "../domain/out";
import {ConfigService} from "./config.service";

// * @author Fan Lishui
@Injectable({
  providedIn: 'root'
})
export class OutService {

  private api_url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private publicHasNewAOut = new Subject();
  hasNewAOutObservable = this.publicHasNewAOut.asObservable();

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.api_url = `${this.configService.baseUrl}/outs`;
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
   * @description 查询所有外出申请
   * @date 2018-12-15
   * @returns {Observable<Out[]>}
   * @memberof OutService
   */
  getOuts(): Observable<Out[]> {
    let url = `${this.api_url}`;
    return this.http.get<Out[]>(url);
    // return this.http.get<Out[]>(url, { observe: 'response' });
  };

  /**
   * @description 根据 Id 查询 out
   * @date 2018-12-15
   * @param {string} id
   * @returns {Observable<Out>}
   * @memberof OutService
   */
  getOutById(id: string): Observable<Out> {
    let url = `${this.api_url}/${id}`;
    return this.http.get<Out>(url);
  };


  /**
   * @description 根据 userId 查询 out
   * @date 2018-12-15
   * @param {string} userId
   * @returns {Observable<Out>}
   * @memberof OutService
   */
  getOutByUserId(userId: string): Observable<Out[]> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.get<Out[]>(url);
  };

  /**
   * @description 新建一个 out
   * @date 2018-12-15
   * @param {Out} out
   * @returns {Observable<Out>} 新增的Out对象
   * @memberof OutService
   */
  createOut(out: Out): Observable<Out> {
    let url = `${this.api_url}`;
    return this.http.post<Out>(url, out, this.httpOptions);
    // .pipe(
    //   catchError(this.handleError('addHero', hero))
    // )
  };

  /**
   * @description 修改某个 out 的信息
   * @date 2018-12-15
   * @param {Out} ouot
   * @returns {Observable<Out>}
   * @memberof OutService
   */
  updateOut(out: Out): Observable<Out> {
    let url = `${this.api_url}/${out.id}`;
    return this.http.put<Out>(url, out, this.httpOptions)
  };

  /**
   * @description delete a out by object out
   * @date 2018-12-15
   * @param {Out} out
   * @returns {Observable<{}>}
   * @memberof OutService
   */
  deleteOut(out: Out): Observable<{}> {
    let url = `${this.api_url}/${out.id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description delete a out by id
   * @date 2018-12-15
   * @param {string} id
   * @returns {Observable<{}>}
   * @memberof OutService
   */
  deleteOutById(id: string): Observable<{}> {
    let url = `${this.api_url}/${id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description 根据 userId 删除 Out
   * @date 2018-12-18
   * @param {string} userId
   * @returns {Observable<{}>}
   * @memberof OutService
   */
  deleteOutByUserId(userId: string): Observable<{}> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.delete(url, this.httpOptions);
  }

  /**
   * @description 获取新建 out 的 ID
   * @date 2018-12-18
   * @returns {string} a new out id
   * @memberof OutService
   */
  createNewOutId(): string {
    let currentTime = new Date();
    return currentTime.getTime().toString();
  }

  //发射数据，当调用这个方法的时候，Subject就会发射这个数据，所有订阅了这个Subject的Subscription都会接受到结果
  publicNeedFresh(needFresh: boolean) {
    this.publicHasNewAOut.next(needFresh);
  }
}

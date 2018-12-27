import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { dataSet } from "../domain/annual";
import { ConfigService } from "./config.service";
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  /**
   * @description 获取所有的 annual
   * @author Sun Qisong
   * @date 2018-12-18
   * @returns {Observable<Leava[]>}
   * @memberof DataService
   */
  getDatas(): Observable<User[]> {
    let url = `${this.api_url}`;
    return this.http.get<User[]>(url);
  };


  /**
   * @description new a record 
   * @author Sun Qisong
   * @date 2018-12-18
   * @param {Record} record
   * @returns {Observable<Record>}
   * @memberof DataService
   */
  createData(record: User): Observable<User> {
    let url = `${this.api_url}`;
    return this.http.post<User>(url, record, this.httpOptions);
  };

  /**
   * @description update a annual
   * @author Sun Qisong
   * @date 2018-12-18
   * @param {dataSet} dataSet
   * @returns {Observable<Leava>}
   * @memberof DataService
   */
  updateData(record: User): Observable<User> {
    let url = `${this.api_url}/${record.id}`;
    return this.http.put<User>(url, record, this.httpOptions);
  };

}

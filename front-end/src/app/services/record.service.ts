import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Record } from "../domain/record";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private api_url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.api_url = `${this.configService.baseUrl}/records`;
   }

  /**
   * @description 获取所有的 record
   * @author Wu Kexin
   * @date 2018-12-18
   * @returns {Observable<Leava[]>}
   * @memberof RecordService
   */
  getRecords(): Observable<Record[]> {
    let url = `${this.api_url}`;
    return this.http.get<Record[]>(url);
  };

  /**
   * @description 根据 id 获取 record
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} id
   * @returns {Observable<Record>}
   * @memberof RecordService
   */
  getRecordById(id: string): Observable<Record> {
    let url = `${this.api_url}/${id}`;
    return this.http.get<Record>(url);
  };

  /**
   * @description get a record by userId
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} userId
   * @returns {Observable<Record>}
   * @memberof RecordService
   */
  getRecordByUserId(userId: string): Observable<Record[]> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.get<Record[]>(url);
  };

  /**
   * @description new a record 
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {Record} record
   * @returns {Observable<Record>}
   * @memberof RecordService
   */
  createRecord(record: Record): Observable<Record> {
    let url = `${this.api_url}`;
    return this.http.post<Record>(url, record, this.httpOptions);
  };

  /**
   * @description update a record
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {Record} record
   * @returns {Observable<Leava>}
   * @memberof RecordService
   */
  updateRecord(record: Record): Observable<Record> {
    let url = `${this.api_url}/${record.id}`;
    return this.http.put<Record>(url, record, this.httpOptions);
  };

  /**
   * @description delete a record by the record object
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {Record} reacord
   * @returns {Observable<{}>}
   * @memberof RecordService
   */
  deleteRecord(record: Record): Observable<{}> {
    let url = `${this.api_url}/${record.id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description delete a record by this id
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} id
   * @returns {Observable<{}>}
   * @memberof RecordService
   */
  deleteRecordById(id: string): Observable<{}> {
    let url = `${this.api_url}/${id}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description delete a record by userId
   * @author Wu Kexin
   * @date 2018-12-18
   * @param {string} userId
   * @returns {Observable<{}>}
   * @memberof OutService
   */
  deleteRecordByUserId(userId: string): Observable<{}> {
    let url = `${this.api_url}/?userId=${userId}`;
    return this.http.delete(url, this.httpOptions);
  };

  /**
   * @description get the new record item's id
   * @author Wu Kexin
   * @date 2018-12-18
   * @returns {string}
   * @memberof RecordService
   */
  createNewRecordId(): string {
    let currentTime = new Date();
    return currentTime.getTime().toString();
  };
}

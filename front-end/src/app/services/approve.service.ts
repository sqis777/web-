import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Leave } from "../domain/leave";
import { Out} from "../domain/out";

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {
  private api_url = "http://localhost:3000";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor( private http: HttpClient) { }
  updateLeaveApprovel(leave:Leave): Observable<Leave>{
    let url = `${this.api_url}/leaves/${leave.id}`;
    return this.http.put<Leave>(url,leave,this.httpOptions)
  };
  updateOutApprovel(out:Out): Observable<Out>{
    let url = `${this.api_url}/outs/${out.id}`;
    return this.http.put<Leave>(url,out,this.httpOptions)
  };
}

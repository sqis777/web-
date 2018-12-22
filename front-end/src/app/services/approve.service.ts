import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Leave} from "../domain/leave";
import {Out} from "../domain/out";
import {ConfigService} from "../services/config.service";

import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";

// * @author Fan Lishui
@Injectable({
  providedIn: 'root'
})
export class ApproveService {
  // private api_url = "http://localhost:3000";
  private api_url = this.configService.baseUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor( 
    private http: HttpClient,
    private configService: ConfigService,  
  ) { }
  updateLeaveApprovel(leave:Leave): Observable<Leave>{
    let url = `${this.api_url}/leaves/${leave.id}`;
    return this.http.put<Leave>(url,leave,this.httpOptions)
  };
  
  updateOutApprovel(out:Out): Observable<Out>{
    let url = `${this.api_url}/outs/${out.id}`;
    return this.http.put<Out>(url,out,this.httpOptions)
  };

  getOuts (): Observable<Out[]>{
    let url = `${this.api_url}/outs`;
    return this.http.get<Out[]>(url);
  }
  getLeaves (): Observable<Out[]>{
    const outUrl = `${this.api_url}/leaves`;
    return this.http.get<Out[]>(outUrl).pipe(
      //    tap(outs=> ('fetched outs')),
      catchError(this.handleError('getLeaves',[]))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

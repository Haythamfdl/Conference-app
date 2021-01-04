import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";
import {Session} from "../class/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/sessions';
  }

  public findMine(conference): Observable<Session[]> {
    return this.http.get<Session[]>(this.Url+"/"+conference);
  }

  public save(session : Session): Observable<Object> {
    return this.http.post(this.Url, session, this.httpOptions);
  }

  public update(session : Session): Observable<Object> {
    return this.http.put(this.Url, session, this.httpOptions);
  }

}

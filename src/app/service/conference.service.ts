import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private Url: string;
  private headers : {'Content-Type':'application/json'};
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/conferences';
  }

  public findAll(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.Url);
  }

  public save(conference : Object):Observable<Object> {
    return this.http.post(this.Url, conference, this.httpOptions)
  }
}

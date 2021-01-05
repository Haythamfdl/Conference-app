import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../class/topic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/topics';
  }

  public findMine(conference): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.Url+"/"+conference);
  }

  public save(topic : Topic): Observable<Object> {
    return this.http.post(this.Url, topic, this.httpOptions);
  }

  public update(topic : Topic): Observable<Object> {
    return this.http.put(this.Url, topic, this.httpOptions);
  }
}

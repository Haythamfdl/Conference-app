import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private Url: string;
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/conferences';
  }

  public findAll(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.Url);
  }

  public save(conference: Conference) {
    return this.http.post<Conference>(this.Url, conference);
  }
}

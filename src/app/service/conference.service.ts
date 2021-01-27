import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/conferences';
  }

  public findAll(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.Url);
  }

  public findMine(utilisateur): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.Url + "/myconf/" + utilisateur);
  }

  public update(conference: Conference): Observable<Object> {
    return this.http.put(this.Url, conference, this.httpOptions);
  }

  public save(conference: Conference): Observable<Object> {
    return this.http.post(this.Url, conference, this.httpOptions);
  }
}

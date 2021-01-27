import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../class/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/sessions';
  }

  public findMine(conference): Observable<Session[]> {
    return this.http.get<Session[]>(this.Url + "/" + conference);
  }

  public save(session: Session): Observable<Object> {
    return this.http.post(this.Url, session, this.httpOptions);
  }

  public update(session: Session): Observable<Object> {
    return this.http.put(this.Url, session, this.httpOptions);
  }

}

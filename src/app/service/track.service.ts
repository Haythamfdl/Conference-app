import {Injectable} from '@angular/core';
import {Track} from "../class/track";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/tracks';
  }

  public findMine(session): Observable<Track[]> {
    return this.http.get<Track[]>(this.Url + "/" + session);
  }

  public save(track: Track): Observable<Object> {
    return this.http.post(this.Url, track, this.httpOptions);
  }

  public update(track: Track): Observable<Object> {
    return this.http.put(this.Url, track, this.httpOptions);
  }
}

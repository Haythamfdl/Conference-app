import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Papier} from "../class/papier";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PapierService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  httpOptionsUpload = {
    headers: new HttpHeaders({'Content-Type': undefined})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/papiers';
  }

  public findbyConf(conference): Observable<Papier[]> {
    return this.http.get<Papier[]>(this.Url + "/" + conference);
  }

  public findbyConfC(conference): Observable<Papier[]> {
    return this.http.get<Papier[]>(this.Url + "/confirmer/" + conference);
  }

  public findMine(utilisateur): Observable<Papier[]> {
    return this.http.get<Papier[]>(this.Url + "/my/" + utilisateur);
  }

  public save(papier: Papier): Observable<Papier> {
    return this.http.post(this.Url, papier).pipe(map(value => Object.assign(new Papier(), value)));
  }

  public update(papier: Papier): Observable<Object> {
    return this.http.put(this.Url, papier, this.httpOptions);
  }

  public upload(papier, file): Observable<Object> {
    return this.http.post(this.Url + "/upload/" + papier, file);
  }
}

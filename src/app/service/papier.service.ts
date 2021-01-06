import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../class/topic";
import {Papier} from "../class/papier";

@Injectable({
  providedIn: 'root'
})
export class PapierService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/papiers';
  }

  public findbyConf(conference): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.Url+"/"+conference);
  }

  public findbyConfC(conference): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.Url+"/confirmer/"+conference);
  }
  public findMine(conference): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.Url+"/my/"+conference);
  }

  public save(papier : Papier): Observable<Object> {
    return this.http.post(this.Url, papier);
  }

  public update(papier : Papier): Observable<Object> {
    return this.http.put(this.Url, papier, this.httpOptions);
  }
}

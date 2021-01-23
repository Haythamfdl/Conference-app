import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SalleConference} from "../class/salle-conference";
import {Session} from "../class/session";
import {Chambre} from "../class/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/chambres';
  }

  public findAll(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.Url);
  }

  public findAlldispo(id :string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.Url+"/disponible/"+id);
  }

  public save(chambre : Chambre):Observable<Object> {
    return this.http.post(this.Url, chambre, this.httpOptions);
  }

  public update(chambre : Chambre):Observable<Object> {
    return this.http.put(this.Url, chambre, this.httpOptions);
  }

}

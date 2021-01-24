import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../class/utilisateur";
import {Invitation} from "../class/invitation";

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/invitations';
  }

  public findAll(): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(this.Url);
  }

  public invRec(id :string): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(this.Url+"/recu/"+id);
  }

  public invEnv(id:string): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(this.Url+"/env/"+id);
  }

  public invConf(id:string): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(this.Url+"/conf/"+id);
  }

  public save(invitation : Invitation):Observable<Object> {
    return this.http.post(this.Url, invitation, this.httpOptions);
  }

  public update(invitation : Invitation):Observable<Object> {
    return this.http.put(this.Url, invitation, this.httpOptions);
  }
}

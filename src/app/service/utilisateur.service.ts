import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";
import {Utilisateur} from "../class/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/utilisateurs';
  }
  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.Url);
  }

  public login(email:string,pass:string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.Url+"/"+email+"/"+pass);
  }

  public save(utilisateur : Utilisateur):Observable<Object> {
    return this.http.post(this.Url, utilisateur, this.httpOptions);
  }

  public update(utilisateur : Utilisateur):Observable<Object> {
    return this.http.put(this.Url, utilisateur, this.httpOptions);
  }

}

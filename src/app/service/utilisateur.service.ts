import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";
import {Utilisateur} from "../class/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private Url: string;
  private headers : {'Content-Type':'application/json'};
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/utilisateurs';
  }
  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.Url);
  }

  public login(email:string,pass:string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.Url+"/"+email+"/"+pass);
  }

}

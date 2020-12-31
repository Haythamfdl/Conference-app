import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../class/hotel";
import {SalleConference} from "../class/salle-conference";

@Injectable({
  providedIn: 'root'
})
export class SalleConfService {
  private Url: string;
  private headers : {'Content-Type':'application/json'};
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/sallesconferences';
  }

  public findAll(): Observable<SalleConference[]> {
    return this.http.get<SalleConference[]>(this.Url);
  }

  public findAlldispo(hotel :Hotel): Observable<SalleConference[]> {
    return this.http.get<SalleConference[]>(this.Url+"/disponible/"+hotel);
  }

}

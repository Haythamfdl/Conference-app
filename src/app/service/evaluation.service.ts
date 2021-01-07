import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conference} from "../class/conference";
import {Evaluation} from "../class/evaluation";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private Url: string;
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/evaluations';
  }

  public findByPapier(papier): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.Url+"/"+papier);
  }

  public findMine(utilisateur): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.Url+"/my/"+utilisateur);
  }

  public update(evaluation : Evaluation): Observable<Object> {
    return this.http.put(this.Url, evaluation, this.httpOptions);
  }

  public save(evaluation : Evaluation):Observable<Object> {
    return this.http.post(this.Url, evaluation, this.httpOptions);
  }
}

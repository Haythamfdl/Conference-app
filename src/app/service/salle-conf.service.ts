import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SalleConference} from "../class/salle-conference";

@Injectable({
  providedIn: 'root'
})
export class SalleConfService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/sallesconferences';
  }

  public findAll(): Observable<SalleConference[]> {
    return this.http.get<SalleConference[]>(this.Url);
  }

  public findAllbyHotel(id: string): Observable<SalleConference[]> {
    return this.http.get<SalleConference[]>(this.Url + "/" + id);
  }

  public findAlldispo(id: string): Observable<SalleConference[]> {
    return this.http.get<SalleConference[]>(this.Url + "/disponible/" + id);
  }

  public save(salleConference: SalleConference): Observable<Object> {
    return this.http.post(this.Url, salleConference, this.httpOptions);
  }

  public update(salleConference: SalleConference): Observable<Object> {
    return this.http.put(this.Url, salleConference, this.httpOptions);
  }

}
